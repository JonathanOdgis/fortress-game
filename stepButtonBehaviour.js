#pragma strict

var active: boolean;

var otherScript: spikePlateBehaviour;

function Start () 
{
	active = false;
}
function Update () 
{
	if (active == true)
	{
		otherScript.lowerSpeed();	
	}
}

function OnTriggerEnter(other: Collider)
{
	if (other.CompareTag("Player"))
	{
		active = true;
	}
}