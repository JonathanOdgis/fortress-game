 #pragma strict
 var player : Transform;
 var x : float;
 var y : float;
 var z : float;
 function Start () {
 
  if(PlayerPrefs.HasKey("x") && PlayerPrefs.HasKey("y") && PlayerPrefs.HasKey("z")) {
  
  x = PlayerPrefs.GetFloat("x");
  y = PlayerPrefs.GetFloat("y");
  z = PlayerPrefs.GetFloat("z");
  
  player.position.x = x;
  player.position.y = y;
  player.position.z = z;
  
  }
 }
 
 function Update () {
 
   x = player.position.x;
   PlayerPrefs.SetFloat("x", x);
   
   y = player.position.y;
   PlayerPrefs.SetFloat("y", y);
   
   z = player.position.z;
   PlayerPrefs.SetFloat("z", z);
   
 }