#pragma strict

var arrowDispenser: GameObject;
var arrowSensor: onStepArrowTriggerBehaviour;
var arrow: GameObject;

function Start () 
{

}

function Update () 
{
	if (arrowSensor.getCurrentStatus() == true)
	{
		Debug.Log("Firing Arrows");
		var clone : GameObject;
		clone = Instantiate(arrow, arrowDispenser.transform.position, arrowDispenser.transform.rotation);
		
	}
	if (arrowSensor.getCurrentStatus() == false)
	{
		Debug.Log("Not Firing Arrows");
	}
}