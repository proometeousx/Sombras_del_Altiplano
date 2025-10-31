extends Node

# RUTAS REALES SEGÚN TU PROYECTO
const MENU_SCENE: String        = "res://scenes/ui/main_menu.tscn"
const INTRO_VIDEO_SCENE: String = "res://world/intro_video.tscn"      # la crearás
const DIALOGUE_SCENE: String    = "res://world/dialogue_wrapper.tscn" # la crearás
const ESCENARIO_1: String       = "res://world/escenario_2.tscn"      # o escenario_3.tscn

@onready var menu_layer: Node = $MenuLayer
@onready var game_layer: Node = $GameLayer
@onready var ui_layer: Node   = $UILayer

func _ready() -> void:
	_show_menu()


# =================== 1) MENÚ ===================
func _show_menu() -> void:
	_clear_node(menu_layer)

	var packed_menu := load(MENU_SCENE)
	if packed_menu == null:
		push_error("NO SE PUDO CARGAR el menú en: %s" % MENU_SCENE)
		return

	var menu: Node = packed_menu.instantiate()
	menu_layer.add_child(menu)

	if menu.has_signal("start_game"):
		menu.connect("start_game", Callable(self, "_on_menu_start_game"))
	else:
		push_warning("El menú no tiene la señal 'start_game'. Agrégala en res://ui/main_menu.tscn")


func _on_menu_start_game() -> void:
	_play_intro_video()


# =================== 2) VIDEO ===================
func _play_intro_video() -> void:
	_clear_node(game_layer)

	var packed_vid := load(INTRO_VIDEO_SCENE)
	if packed_vid == null:
		push_error("NO SE PUDO CARGAR el video en: %s" % INTRO_VIDEO_SCENE)
		return

	var vid: Node = packed_vid.instantiate()
	game_layer.add_child(vid)

	if vid.has_signal("video_finished"):
		vid.connect("video_finished", Callable(self, "_on_intro_finished"))


func _on_intro_finished() -> void:
	_start_dialogue_intro()


# =================== 3) DIÁLOGO ===================
func _start_dialogue_intro() -> void:
	_clear_node(ui_layer)

	var packed_dlg := load(DIALOGUE_SCENE)
	if packed_dlg == null:
		push_error("NO SE PUDO CARGAR el diálogo en: %s" % DIALOGUE_SCENE)
		return

	var dlg: Node = packed_dlg.instantiate()
	ui_layer.add_child(dlg)

	if dlg.has_method("start_dialogue"):
		dlg.call("start_dialogue", "intro_objetivo_escena_1")

	if dlg.has_signal("dialogue_finished"):
		dlg.connect("dialogue_finished", Callable(self, "_on_dialogue_finished"))


func _on_dialogue_finished() -> void:
	_load_escenario_1()


# =================== 4) ESCENARIO ===================
func _load_escenario_1() -> void:
	_clear_node(menu_layer)
	_clear_node(game_layer)

	var packed_scene := load(ESCENARIO_1)
	if packed_scene == null:
		push_error("NO SE PUDO CARGAR el escenario en: %s" % ESCENARIO_1)
		return

	var escenario: Node = packed_scene.instantiate()
	game_layer.add_child(escenario)


# =================== UTIL ===================
func _clear_node(target: Node) -> void:
	for c in target.get_children():
		c.queue_free()
