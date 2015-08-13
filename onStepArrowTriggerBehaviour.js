#pragma strict

var isTriggered: boolean;

function Start () 
{
	isTriggered = false;
}

function Update () {

}

function OnTriggerStay(other: Collider)
{
	if (other.CompareTag("Player"))
	{
		isTriggered = true;
	}
}

function OnTriggerExit(other: Collider)
{
	if (other.CompareTag("Player"))
	{
		isTriggered = false;
	}
}

function getCurrentStatus()
{
	return isTriggered;
}