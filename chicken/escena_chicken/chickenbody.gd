extends CharacterBody2D

@onready var anim: AnimatedSprite2D = $AnimatedSprite2D_chicken

func _ready() -> void:
	anim.play("chicken_comport")  # reproduce la animación al iniciar

func _physics_process(delta: float) -> void:
	if not is_on_floor():
		velocity += get_gravity() * delta
	move_and_slide()
