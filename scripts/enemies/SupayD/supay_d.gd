extends CharacterBody2D


const SupayDRun= 70
const Gravedad=98


func _ready():
	velocity.x = -SupayDRun
	$AnimatedSprite2D.play("run")
	
func _physics_process(delta: float) -> void:
	velocity.y = +Gravedad
	
	if is_on_wall():
		if !$AnimatedSprite2D.flip_h:
			velocity.x = SupayDRun
		else:
			velocity.x = -SupayDRun
		
	if velocity.x < 0:
			$AnimatedSprite2D.flip_h = false
	elif velocity.x > 0:
			$AnimatedSprite2D.flip_h = true
	
	move_and_slide()
