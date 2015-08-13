#pragma strict


var ladderTop: Transform;
var ladderBottom: Transform;
var holdingLadder: boolean;
var player: GameObject;
var climbSpeed: float;
var speed: float;

function Start () 
{
	holdingLadder = false;
	player = GameObject.Find("Player");
	climbSpeed = speed / 2 * Time.deltaTime;		
}

function Update () 
{
	if (holdingLadder == true)
	{	
		player.transform.position = Vector3.MoveTowards(player.transform.position, ladderTop.transform.position, climbSpeed); 
	
	}
}

function OnTriggerStay(other: Collider)
{
	if (other.CompareTag("Player"))
	{
		holdingLadder = true;
	}
}

function OnTriggerExit(other: Collider)
{
	if (other.CompareTag("Player"))
	{
		holdingLadder = false;
	}
}