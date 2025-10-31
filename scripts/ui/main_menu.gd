extends Control
signal start_game
signal options_requested


func _on_button_pressed() -> void:
	# Botón: Nuevo juego
	emit_signal("start_game")

func _on_button_2_pressed() -> void:
	# Botón: Opciones (si luego quieres)
	emit_signal("options_requested")

func _on_button_3_pressed() -> void:
	# Botón: Salir
	get_tree().quit()
