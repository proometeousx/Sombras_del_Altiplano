extends CharacterBody2D

@export var speed: float = 80.0
@onready var detect_area: Area2D = $DetectArea
@onready var patrol_node: Node2D = $Patrol

var patrol_points: Array = []
var current_patrol_index: int = 0
var target: Node = null

func _ready():
	# Cargar waypoints (acepta cualquier Node2D como punto)
	patrol_points.clear()
	if is_instance_valid(patrol_node):
		for child in patrol_node.get_children():
			if child is Node2D:
				patrol_points.append(child.global_position)
	# Conectar señales (si no las conectaste desde el editor)
	if detect_area:
		detect_area.body_entered.connect(_on_detect_body_entered)
		detect_area.body_exited.connect(_on_detect_body_exited)


func _physics_process(_delta):
	# Usamos la propiedad `velocity` del CharacterBody2D (NO la redeclaramos)
	if target and is_instance_valid(target):
		var dir: Vector2 = target.global_position - global_position
		if dir.length() > 1.0:
			velocity = dir.normalized() * speed * 1.6
		else:
			velocity = Vector2.ZERO
	else:
		if patrol_points.size() > 0:
			var dest: Vector2 = patrol_points[current_patrol_index]
			var dir: Vector2 = dest - global_position
			if dir.length() < 8.0:
				current_patrol_index = (current_patrol_index + 1) % patrol_points.size()
				velocity = Vector2.ZERO
			else:
				velocity = dir.normalized() * speed
		else:
			velocity = Vector2.ZERO

	# Mover con CharacterBody2D: no pasar argumentos, sólo llamar.
	move_and_slide()

# Señales de detección
func _on_detect_body_entered(body):
	print("DetectArea: entró -> ", body.name, " grupos: ", body.get_groups())
	if body.is_in_group("Player"):
		target = body
		print("Villano: jugador detectado")

func _on_detect_body_exited(body):
	print("DetectArea: salió -> ", body.name)
	if body == target:
		target = null
		print("Villano: perdió jugador, vuelvo a patrullar")
