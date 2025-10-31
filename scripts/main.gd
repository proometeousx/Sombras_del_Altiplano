extends Node

# =================== RUTAS ===================
const MENU_SCENE: String              = "res://scenes/ui/main_menu.tscn"
const INTRO_1_SCENE: String           = "res://scenes/intro/intro_1.tscn"
const INTRO_2_SCENE: String           = "res://scenes/intro/intro_2.tscn"
const INTRO_3_SCENE: String           = "res://scenes/intro/intro_3.tscn"
const ESCENARIO_GENERAL_SCENE: String = "res://scenes/world/ESCENARIO_GENERAL.tscn"

@onready var menu_layer: Node = $MenuLayer
@onready var game_layer: Node = $GameLayer
@onready var ui_layer: Node   = $UILayer


func _ready() -> void:
	_show_menu()


# =================== 1️⃣ MENÚ ===================
func _show_menu() -> void:
	_clear_node(menu_layer)

	var packed_menu: PackedScene = load(MENU_SCENE)
	if packed_menu == null:
		push_error("No se pudo cargar el menú en: %s" % MENU_SCENE)
		return

	var menu: Node = packed_menu.instantiate()
	menu_layer.add_child(menu)

	# El menú debe emitir "start_game"
	if menu.has_signal("start_game"):
		menu.connect("start_game", Callable(self, "_on_menu_start_game"))
	else:
		push_warning("El menú no tiene la señal 'start_game'. Agrégala en res://scenes/ui/main_menu.tscn")


func _on_menu_start_game() -> void:
	_play_intro_1()


# =================== 2️⃣ INTRO 1 ===================
func _play_intro_1() -> void:
	_clear_node(game_layer)

	var packed_intro: PackedScene = load(INTRO_1_SCENE)
	if packed_intro == null:
		push_error("No se pudo cargar intro_1: %s" % INTRO_1_SCENE)
		return

	var intro1: Node = packed_intro.instantiate()
	game_layer.add_child(intro1)

	# 👇 aseguramos que el nodo ya está en el árbol antes de conectar
	await get_tree().process_frame

	if intro1.has_signal("intro_finished"):
		intro1.connect("intro_finished", Callable(self, "_play_intro_2"))
	else:
		push_warning("intro_1.tscn no tiene la señal 'intro_finished'")


# =================== 3️⃣ INTRO 2 ===================
func _play_intro_2() -> void:
	_clear_node(game_layer)

	var packed_intro: PackedScene = load(INTRO_2_SCENE)
	if packed_intro == null:
		push_error("No se pudo cargar intro_2: %s" % INTRO_2_SCENE)
		return

	var intro2: Node = packed_intro.instantiate()
	game_layer.add_child(intro2)

	# 👇 otra vez, esperamos un frame para que exista en el árbol
	await get_tree().process_frame

	if intro2.has_signal("intro_finished"):
		intro2.connect("intro_finished", Callable(self, "_play_intro_3"))
	else:
		push_warning("intro_2.tscn no tiene la señal 'intro_finished'")


# =================== 4️⃣ INTRO 3 ===================
func _play_intro_3() -> void:
	_clear_node(game_layer)

	var packed_intro: PackedScene = load(INTRO_3_SCENE)
	if packed_intro == null:
		push_error("No se pudo cargar intro_3: %s" % INTRO_3_SCENE)
		return

	var intro3: Node = packed_intro.instantiate()
	game_layer.add_child(intro3)

	await get_tree().process_frame

	if intro3.has_signal("intro_finished"):
		intro3.connect("intro_finished", Callable(self, "_load_escenario_general"))
	else:
		push_warning("intro_3.tscn no tiene la señal 'intro_finished'")


# =================== 5️⃣ ESCENARIO FINAL ===================
func _load_escenario_general() -> void:
	_clear_node(menu_layer)
	_clear_node(game_layer)

	var packed_scene: PackedScene = load(ESCENARIO_GENERAL_SCENE)
	if packed_scene == null:
		push_error("No se pudo cargar el escenario general: %s" % ESCENARIO_GENERAL_SCENE)
		return

	var escenario: Node = packed_scene.instantiate()
	game_layer.add_child(escenario)


# =================== ⚙️ UTIL ===================
func _clear_node(target: Node) -> void:
	for c in target.get_children():
		c.queue_free()
