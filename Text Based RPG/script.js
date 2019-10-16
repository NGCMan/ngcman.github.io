var coordx = 0
var coordy = 0
var dungeonLevel = 0
        window.onload = function(){
document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";

document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
}

function North() {
  coordy++
  if (dungeonLevel==0) {
  if (coordy > 2) {
  coordy= 2
  }
  document.getElementById("surroundings").innerHTML = "There is a wall near you."
  }
    document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";

document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
}


function South() {
  coordy--
  if (dungeonLevel==0) {
if (coordy < -2) {
  coordy= -2
}
  document.getElementById("surroundings").innerHTML = "There is a wall near you."
  }
    document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";

document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
}


function West() {
  coordx--
if (dungeonLevel==0) {
if (coordx < -2) {
  coordx= -2
}
  document.getElementById("surroundings").innerHTML = "There is a wall near you."
  }
    document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";

document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
}


function East() {
  coordx++
if (dungeonLevel==0) {
if (coordx > 2) {
  coordx=2
}
  document.getElementById("surroundings").innerHTML = "There is a wall near you."
  }
    document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";

document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
}

const interval = setInterval(function() {
if (dungeonLevel==0) {
if (coordx==0) {
    if (coordy==0) {
document.getElementById("surroundings").innerHTML = "There is a staircase leading downwards."
  }
}
 }
 if (dungeonLevel==1) {
if (coordx==0) {
    if (coordy==0) {
document.getElementById("surroundings").innerHTML = "There is a staircase leading upwards."
  }
}
 }
}, 50);

function CDown() {
	// Floor 0 to 1.
if (dungeonLevel==0) {
if (coordx==0) {
    if (coordy==0) {
dungeonLevel++
document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";
  }
}
 }
}

function CUp() {
	// Floor 1 to 0.
if (dungeonLevel==1) {
if (coordx==0) {
    if (coordy==0) {
dungeonLevel--
document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";
  }
}
 }
}
