#pragma strict

var health: float;

function Start () 
{

}

function Update () 
{

}

function setHealth(value: float)
{
	health = health + value;
}

function getHealth()
{
	return health;
}