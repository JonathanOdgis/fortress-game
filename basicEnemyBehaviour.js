#pragma strict

var target: Transform;
private var agent: NavMeshAgent;

var basicEnemyAttributes : BasicEnemyAttributes;

function Start ()
{
	agent = GetComponent.<NavMeshAgent>();
}

function Update ()
{
	agent.SetDestination(target.position);

	if (basicEnemyAttributes.getHealth() <= 0)
	{
		Destroy(this.gameObject);
	}
}

function OnTriggerEnter(other: Collider)
{
	if (other.CompareTag("Player Weapon"))
	{
		basicEnemyAttributes.setHealth(-10);
	}
}
