#pragma strict
var player: GameObject;   //Set equal to the player object in the editor
var target: GameObject;	  //The target area of the final impact with the platform.
var grabbed: boolean;     //Flags whether or not the edge has been grabbed. 
var speed: float;		  //speed of movement of the edge grab
var waitTime: float;
//var otherscript: FirstPersonController;

function Start () 
{
	speed = Time.deltaTime * 15;  //20
}

function Update () 
{
	if (grabbed == true)   
	{
		player.gameObject.transform.position = Vector3.MoveTowards(player.gameObject.transform.position, Vector3(player.gameObject.transform.position.x,target.gameObject.transform.position.y, player.gameObject.transform.position.z), speed);		
	}
}

function OnTriggerStay(other: Collider)
{
	if (other.CompareTag('Player') && Input.GetKey('e'))
	{
		grabbed = true;
		Debug.Log("It grabbed");
		yield WaitForSeconds(waitTime);     //Wait a set amount of time before setting grabbed back to false to allow player to move again.
		grabbed = false;
	}
}