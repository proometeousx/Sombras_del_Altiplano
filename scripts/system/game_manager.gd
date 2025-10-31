extends Node

const PHASE_1 = preload("res://scenes/world/escenario_1.tscn")

@onready var phase_root = $GameLayer/PhaseRoot
@onready var menu_layer = $MenuLayer

var current_phase: Node

func _ready():
	# por ahora no hay menú, así que cargamos directo la fase 1
	load_phase_1()

func load_phase_1():
	if current_phase:
		current_phase.queue_free()
	var p = PHASE_1.instantiate()
	phase_root.add_child(p)
	current_phase = p
