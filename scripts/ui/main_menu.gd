extends Control

signal start_game
signal options_requested

# Precargamos la pista para asegurarnos de que esté lista
const MENU_MUSIC = preload("res://assets/menu_assets/melancholy-guitar-33396.ogg")

@onready var music: AudioStreamPlayer = $AudioStreamPlayer


func _ready() -> void:
	# Configurar música si no tiene asignado el stream
	if music.stream == null:
		music.stream = MENU_MUSIC

	music.volume_db = -10
	music.autoplay = false
	# Fade-in suave

	# Hacemos fade-in al abrir el menú
	_fade_in_music()


# 🎮 NUEVO JUEGO
func _on_button_pressed() -> void:
	_fade_out_music()
	await get_tree().create_timer(1.5).timeout
	emit_signal("start_game")


# ⚙️ OPCIONES
func _on_button_2_pressed() -> void:
	emit_signal("options_requested")


# ❌ SALIR
func _on_button_3_pressed() -> void:
	_fade_out_music()
	await get_tree().create_timer(1.0).timeout
	get_tree().quit()


# 🎵 Fade In
func _fade_in_music():
	music.volume_db = -80  # arranca silenciado
	music.play()

	var tween = create_tween()
	tween.tween_property(music, "volume_db", -10, 2.5)  # sube volumen suave


# 🎵 Fade Out
func _fade_out_music():
	if music.playing:
		var tween = create_tween()
		tween.tween_property(music, "volume_db", -80, 1.5)
		await tween.finished
		music.stop()
