extends Control

signal intro_finished    # notifica al main.gd

@onready var voice1 = $AudioStreamPlayer      # primer diálogo o narrador
@onready var voice2 = $AudioStreamPlayer2     # segundo diálogo o respuesta
@onready var fade = $AnimationPlayer

func _ready():
	fade.play("fade_in")
	
	# 1) Primer diálogo
	voice1.play()
	await voice1.finished
	
	# 2) Pausa entre voces
	await get_tree().create_timer(3.0).timeout
	
	# 3) Segundo diálogo
	voice2.play()
	await voice2.finished
	
	# 4) Pausa antes del fade
	await get_tree().create_timer(1.5).timeout
	
	# 5) Fade out visual
	fade.play("fade_out")
	await get_tree().create_timer(1.5).timeout
	
	# 6) Avisamos al main que ya puede cargar el escenario
	emit_signal("intro_finished")
	# ❌ NO hacemos queue_free() aquí
