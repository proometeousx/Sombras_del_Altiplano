extends Control

signal intro_finished   # 👈 asegúrate de tener esta línea

@onready var voice1 = $AudioStreamPlayer
@onready var voice2 = $AudioStreamPlayer2
@onready var fade = $AnimationPlayer

func _ready():
	fade.play("fade_in")
	
	voice1.play()
	await voice1.finished

	await get_tree().create_timer(3.0).timeout
	
	voice2.play()
	await voice2.finished

	await get_tree().create_timer(1.5).timeout
	
	fade.play("fade_out")
	await get_tree().create_timer(1.5).timeout
	
	# 👇 emitimos la señal al final, sin queue_free()
	print("Emitido: intro_finished desde intro_2")
	emit_signal("intro_finished")
