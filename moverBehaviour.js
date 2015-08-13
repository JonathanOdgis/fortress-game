#pragma strict

var moverButton : moverButtonBehaviour;

var start: GameObject;
var destination: GameObject;

var toStartSpeed: float;
var toDestinationSpeed: float;


function Start () 
{
	toStartSpeed = Time.deltaTime * 2;
	toDestinationSpeed = Time.deltaTime * 10;
	//start = this.transform;
}

function Update () 
{
	if (moverButton.getCurrentStatus() == true)
	{
		Debug.Log("The mover is now in the different place");
		this.transform.position = Vector3.MoveTowards(this.transform.position, destination.transform.position, toDestinationSpeed);	
	}
	if (moverButton.getCurrentStatus() == false)
	{
		Debug.Log("The mover is in the original Place");
		this.transform.position = Vector3.MoveTowards(this.transform.position, start.transform.position, toStartSpeed);	
	}

}