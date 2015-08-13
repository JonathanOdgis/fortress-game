#pragma strict

var health : float = 100;
var maxHealth : float = 200;
var isHealing : boolean = false;
var inTrap : boolean = false;

function Start () {
  Debug.Log("Player health is " + health);
}

function Update () {
  if (health <= 0) {
    Destroy(this.gameObject);
  }
}

function OnTriggerEnter(other: Collider) {
  if (other.CompareTag("HealthFountain")) {
    isHealing = true;
    while (isHealing) {
      health = health + 10;
      Debug.Log("Player health is now " + health);
      yield WaitForSeconds(1);
    }
  }

  if (other.CompareTag("SpikeTrap")) {
    inTrap = true;
    while (inTrap) {
      health = health - 10;
      Debug.Log("Player health is now " + health);
      yield WaitForSeconds(1);
    }
  }
}

function OnTriggerExit(other: Collider) {
  if (other.CompareTag("HealthFountain")) {
    isHealing = false;
  }

  if (other.CompareTag("SpikeTrap")) {
    inTrap = false;
  }
}
