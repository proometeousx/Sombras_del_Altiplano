extends Control

@onready var bg := $ColorRect
@onready var img := $TextureRect
@onready var player := $AudioStreamPlayer
@onready var anim := $AnimationPlayer

const NEXT_SCENE := "res://scenes/ui/main_menu.tscn"  # cambia si quieres ir a otra

func _ready() -> void:
	# empezamos en negro
	bg.modulate.a = 1.0
	img.visible = true

	# fade in
	anim.play("fade_in")

	# reproducir audio
	player.play()

	# esperar a que termine el audio
	_play_sequence()


func _play_sequence() -> void:
	# lo hacemos async
	await player.finished

	# pequeña pausa para respirar
	await get_tree().create_timer(1.0).timeout

	# fade out
	anim.play("fade_out")
	await get_tree().create_timer(1.0).timeout

	# ir al menú
	get_tree().change_scene_to_file(NEXT_SCENE)
