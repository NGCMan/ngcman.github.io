var coordx = 0
var coordy = 0
var dungeonLevel = 0
        window.onload = function(){
document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";
          
document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
}

function North() {
  coordy++
  document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";
          
document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
}

function South() {
  coordy--
  document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";
          
document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
}

function West() {
  coordx--
  document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";
          
document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
}

function East() {
  coordx++
  document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";
          
document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
}
