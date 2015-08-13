#pragma strict

function Start () 
{

}

function Update () 
{
	if (Input.GetKey(KeyCode.Q))
	{
		GetComponent.<Collider>().isTrigger = true;
	}
	else
	{
		GetComponent.<Collider>().isTrigger = false;	
	}
}