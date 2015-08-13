#pragma strict
var Level: String;
var startingPoint: String;
function OnTriggerEnter(other: Collider) 
{

             
	if (other.CompareTag("Player"))
	{
		PlayerPrefs.SetString("starting point", startingPoint);	
		Application.LoadLevel (Level);
    }
}