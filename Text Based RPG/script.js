var coordx = 0
var coordy = 0
var dungeonLevel = 0
        window.onload = function(){
document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";
          
document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
}

function North() {
  coordy++
  if (coordy > 2) {
  coordy= 2
  document.getElementById("surroundings").innerHTML = "There is a wall near you."
  }
    document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";
          
document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
}  


function South() {
  coordy--
if (coordy < -2) {
  coordy= -2
  document.getElementById("surroundings").innerHTML = "There is a wall near you."
  }
    document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";
          
document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
}
 

function West() {
  coordx--
if (coordx < -2) {
  coordx= -2
  document.getElementById("surroundings").innerHTML = "There is a wall near you."
  }
    document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";
          
document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
}


function East() {
  coordx++
  
if (coordx > 2) {
  coordx=2
  document.getElementById("surroundings").innerHTML = "There is a wall near you."
  }
    document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";
          
document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
}
