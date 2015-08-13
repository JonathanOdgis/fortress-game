#pragma strict

var door: GameObject;
var doorOpenDestination: Transform;
var doorCloseDestination: Transform;

var doorSensor: onStepDoorOpernerBehaviour;

function Start () 
{

}

function Update () 
{
	if (doorSensor.getCurrentStatus() == true)
	{
		Debug.Log("Ok here we will have the door open");
		door.transform.position = Vector3.MoveTowards(door.transform.position, doorOpenDestination.transform.position, .2);
	}
	if (doorSensor.getCurrentStatus() == false)
	{
		Debug.Log("Ok here we will have the door close");
		door.transform.position = Vector3.MoveTowards(door.transform.position, doorCloseDestination.transform.position, .2);
	}
}