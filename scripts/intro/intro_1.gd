extends Control

signal intro_finished   # 👈 igual que los otros intros

@onready var voice1 = $AudioStreamPlayer      # primer diálogo o narrador
@onready var voice2 = $AudioStreamPlayer2     # segundo diálogo o respuesta
@onready var fade = $AnimationPlayer

func _ready():
	fade.play("fade_in")
	
	# Reproduce el primer diálogo
	voice1.play()
	await voice1.finished
	
	# Pausa de 3 segundos antes del siguiente diálogo
	await get_tree().create_timer(1.5).timeout
	
	# Reproduce el segundo diálogo
	voice2.play()
	await voice2.finished
	
	# Pausa breve antes del fade out
	await get_tree().create_timer(1.5).timeout
	
	fade.play("fade_out")
	await get_tree().create_timer(1.5).timeout
	
	# 👇 Avisamos al main.gd que ya puede cargar intro_2
	print("Emitido: intro_finished desde intro_1")
	emit_signal("intro_finished")
	# ❌ NO uses change_scene_to_file ni queue_free
