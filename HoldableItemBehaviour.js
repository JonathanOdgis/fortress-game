#pragma strict

var grabbed: boolean;
var player: GameObject;

function Start () 
{
	grabbed = false;
}

function Update () 
{	
	if (grabbed == true)
	{
		this.gameObject.transform.position = player.gameObject.transform.position;
	}
	
	if (grabbed == false)
	{
		this.gameObject.transform.position = this.gameObject.transform.position;
	}
	if (Input.GetKeyDown(KeyCode.E))
	{
		grabbed = true;
	}

}

function OnTriggerEnter(other: Collider)
{

}