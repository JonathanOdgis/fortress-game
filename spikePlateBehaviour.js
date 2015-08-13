#pragma strict

var Floor: Transform;
var Ceiling: Transform;

var riseUp: boolean;
var fallDown: boolean;

var speedFall: float;
var speedRise: float;

var setFallSpeed: float;
var setRiseSpeed: float;

function Start () 
{	
	Debug.Log("ooma its a setup its a setup");
	riseUp = false;
	fallDown = true;
	
	speedFall = setFallSpeed * Time.deltaTime;
	speedRise = setRiseSpeed * Time.deltaTime;
}

function Update () 
{
	if (this.transform.position == Floor.transform.position)
	{
		riseUp = true;
		fallDown = false;
	}
	if (this.transform.position == Ceiling.transform.position)
	{
		riseUp = false;
		fallDown = true;
	}
			
	
	if (riseUp == false && fallDown == true)
	{
		this.transform.position = Vector3.MoveTowards(this.transform.position, Floor.transform.position, speedFall);
	}
	if (riseUp == true && fallDown == false)
	{
		this.transform.position = Vector3.MoveTowards(this.transform.position, Ceiling.transform.position, speedRise);		
	}
}

function OnTriggerEnter(other: Collider)
{
	if (other.CompareTag("Stopper"))   //isKinematic fixed the stopper not working thing
	{
		riseUp = true;
		fallDown = false;
	}
}

function lowerSpeed()
{
	speedFall = 1 * Time.deltaTime;
	speedRise = 1 * Time.deltaTime;
}


