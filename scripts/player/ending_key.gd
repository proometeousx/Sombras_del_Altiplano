extends Node

# preload del ending screen o escena final
const ENDING_SCENE = preload("res://scenes/ui/ending_screen.tscn")

func _process(delta: float) -> void:
	# 👇 Presiona E para activar el final
	if Input.is_action_just_pressed("ui_accept"):  # o define tu acción "ending_key"
		_trigger_ending()

func _trigger_ending() -> void:
	var ending = ENDING_SCENE.instantiate()
	get_tree().current_scene.add_child(ending)
	print("⚡ Ending manual activado (tecla especial)")
