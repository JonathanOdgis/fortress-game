#pragma strict

var spawnID: String;

function Start () 
{
	spawnID = PlayerPrefs.GetString("starting point");
	this.transform.position = GameObject.Find(spawnID).transform.position;
	Debug.Log(spawnID);
}

function Update () {

}