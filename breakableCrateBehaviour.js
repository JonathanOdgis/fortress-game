#pragma strict

var crate: GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other: Collider)
{
	if (other.CompareTag("Event"))
	{
		Destroy(this.crate);
		yield WaitForSeconds(2);
		Destroy(this.gameObject);
	}
}