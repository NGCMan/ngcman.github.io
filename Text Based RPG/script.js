var coordx = 0
var coordy = 0
var dungeonLevel = 0
var encounter = 0
var movement = document.getElementById("movement");
var attack = document.getElementById("attack");
var TheWholeGame = document.getElementById("TheWholeGame");
// RPG Stats
var hp = 24
var mp = 12
var atk = 2
var def = 1

var enemyHp = 6
var enemyMp = 0
var enemyAtk = 3
var enemyDef = 0
        window.onload = function(){
document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";

document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
  attack.style.display = "none";
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
  if (dungeonLevel==1) {
    // Thanks to Mozilla for the function!
    function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

 encounter = (getRandomInt(10) + 1);

    if (encounter==10) {
        document.getElementById("surroundings").innerHTML = "A bug appears!"
enemyHp = 6
enemyMp = 0
enemyAtk = 3
enemyDef = 0
      movement.style.display = "none";
      attack.style.display = "block";
      var y = document.getElementsByClassName("enemy");
  y[2].innerHTML = "HP: " + enemyHp;
var y = document.getElementsByClassName("enemy");
  y[4].innerHTML = "MP: " + enemyMp;
var y = document.getElementsByClassName("enemy");
  y[6].innerHTML = "ATK: " + enemyAtk;
var y = document.getElementsByClassName("enemy");
  y[8].innerHTML = "DEF: " + enemyDef;
    }
  }
}
function NWest() {
  coordy++
  coordx--
  if (dungeonLevel==0) {
  if (coordy > 2) {
  coordy= 2
  }
  document.getElementById("surroundings").innerHTML = "There is a wall near you."
  }
    document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";

document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
  if (dungeonLevel==1) {
    // Thanks to Mozilla for the function!
    function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

 encounter = (getRandomInt(10) + 1);

    if (encounter==10) {
        document.getElementById("surroundings").innerHTML = "A bug appears!"
enemyHp = 6
enemyMp = 0
enemyAtk = 3
enemyDef = 0
      movement.style.display = "none";
      attack.style.display = "block";
      var y = document.getElementsByClassName("enemy");
  y[2].innerHTML = "HP: " + enemyHp;
var y = document.getElementsByClassName("enemy");
  y[4].innerHTML = "MP: " + enemyMp;
var y = document.getElementsByClassName("enemy");
  y[6].innerHTML = "ATK: " + enemyAtk;
var y = document.getElementsByClassName("enemy");
  y[8].innerHTML = "DEF: " + enemyDef;
    }
  }
}
function NEast() {
  coordy++
  coordx++
  if (dungeonLevel==0) {
  if (coordy > 2) {
  coordy= 2
  }
  document.getElementById("surroundings").innerHTML = "There is a wall near you."
  }
    document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";

document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
  if (dungeonLevel==1) {
    // Thanks to Mozilla for the function!
    function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

 encounter = (getRandomInt(10) + 1);

    if (encounter==10) {
        document.getElementById("surroundings").innerHTML = "A bug appears!"
enemyHp = 6
enemyMp = 0
enemyAtk = 3
enemyDef = 0
      movement.style.display = "none";
      attack.style.display = "block";
      var y = document.getElementsByClassName("enemy");
  y[2].innerHTML = "HP: " + enemyHp;
var y = document.getElementsByClassName("enemy");
  y[4].innerHTML = "MP: " + enemyMp;
var y = document.getElementsByClassName("enemy");
  y[6].innerHTML = "ATK: " + enemyAtk;
var y = document.getElementsByClassName("enemy");
  y[8].innerHTML = "DEF: " + enemyDef;
    }
  }
}
function SWest() {
  coordy--
  coordx--
  if (dungeonLevel==0) {
  if (coordy > 2) {
  coordy= 2
  }
  document.getElementById("surroundings").innerHTML = "There is a wall near you."
  }
    document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";

document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
  if (dungeonLevel==1) {
    // Thanks to Mozilla for the function!
    function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

 encounter = (getRandomInt(10) + 1);

    if (encounter==10) {
        document.getElementById("surroundings").innerHTML = "A bug appears!"
enemyHp = 6
enemyMp = 0
enemyAtk = 3
enemyDef = 0
      movement.style.display = "none";
      attack.style.display = "block";
      var y = document.getElementsByClassName("enemy");
  y[2].innerHTML = "HP: " + enemyHp;
var y = document.getElementsByClassName("enemy");
  y[4].innerHTML = "MP: " + enemyMp;
var y = document.getElementsByClassName("enemy");
  y[6].innerHTML = "ATK: " + enemyAtk;
var y = document.getElementsByClassName("enemy");
  y[8].innerHTML = "DEF: " + enemyDef;
    }
  }
}
function SEast() {
  coordy--
  coordx++
  if (dungeonLevel==0) {
  if (coordy > 2) {
  coordy= 2
  }
  document.getElementById("surroundings").innerHTML = "There is a wall near you."
  }
    document.getElementById("dungeonLevel").innerHTML = "You are at Floor " + dungeonLevel + " of the dungeon.";

document.getElementById("coordinates").innerHTML = "You are located at: (" + coordx + "," + coordy + ")";
  if (dungeonLevel==1) {
    // Thanks to Mozilla for the function!
    function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

 encounter = (getRandomInt(10) + 1);

    if (encounter==10) {
        document.getElementById("surroundings").innerHTML = "A bug appears!"
enemyHp = 6
enemyMp = 0
enemyAtk = 3
enemyDef = 0
      movement.style.display = "none";
      attack.style.display = "block";
      var y = document.getElementsByClassName("enemy");
  y[2].innerHTML = "HP: " + enemyHp;
var y = document.getElementsByClassName("enemy");
  y[4].innerHTML = "MP: " + enemyMp;
var y = document.getElementsByClassName("enemy");
  y[6].innerHTML = "ATK: " + enemyAtk;
var y = document.getElementsByClassName("enemy");
  y[8].innerHTML = "DEF: " + enemyDef;
    }
  }
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
   if (dungeonLevel==1) {
    // Thanks to Mozilla for the function!
    function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

 encounter = (getRandomInt(10) + 1);

    if (encounter==10) {
        document.getElementById("surroundings").innerHTML = "A bug appears!"
enemyHp = 6
enemyMp = 0
enemyAtk = 3
enemyDef = 0
      movement.style.display = "none";
      attack.style.display = "block";
      var y = document.getElementsByClassName("enemy");
  y[2].innerHTML = "HP: " + enemyHp;
var y = document.getElementsByClassName("enemy");
  y[4].innerHTML = "MP: " + enemyMp;
var y = document.getElementsByClassName("enemy");
  y[6].innerHTML = "ATK: " + enemyAtk;
var y = document.getElementsByClassName("enemy");
  y[8].innerHTML = "DEF: " + enemyDef;
    }
  }
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
   if (dungeonLevel==1) {
    // Thanks to Mozilla for the function!
    function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

 encounter = (getRandomInt(10) + 1);

    if (encounter==10) {
        document.getElementById("surroundings").innerHTML = "A bug appears!"
enemyHp = 6
enemyMp = 0
enemyAtk = 3
enemyDef = 0
      movement.style.display = "none";
      attack.style.display = "block";
      var y = document.getElementsByClassName("enemy");
  y[2].innerHTML = "HP: " + enemyHp;
var y = document.getElementsByClassName("enemy");
  y[4].innerHTML = "MP: " + enemyMp;
var y = document.getElementsByClassName("enemy");
  y[6].innerHTML = "ATK: " + enemyAtk;
var y = document.getElementsByClassName("enemy");
  y[8].innerHTML = "DEF: " + enemyDef;
    }
  }
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
   if (dungeonLevel==1) {
    // Thanks to Mozilla for the function!
    function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

 encounter = (getRandomInt(10) + 1);

    if (encounter==10) {
        document.getElementById("surroundings").innerHTML = "A bug appears!"
enemyHp = 6
enemyMp = 0
enemyAtk = 3
enemyDef = 0
      movement.style.display = "none";
      attack.style.display = "block";
      var y = document.getElementsByClassName("enemy");
  y[2].innerHTML = "HP: " + enemyHp;
var y = document.getElementsByClassName("enemy");
  y[4].innerHTML = "MP: " + enemyMp;
var y = document.getElementsByClassName("enemy");
  y[6].innerHTML = "ATK: " + enemyAtk;
var y = document.getElementsByClassName("enemy");
  y[8].innerHTML = "DEF: " + enemyDef;
    }
  }
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
  if (hp <= 0) {
     document.getElementById("GameOver").innerHTML = "<h1>Game Over!</h1>"
  TheWholeGame.style.display = "none";
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

var x = document.getElementsByClassName("players");
  x[2].innerHTML = "HP: " + hp;
var x = document.getElementsByClassName("players");
  x[4].innerHTML = "MP: " + mp;
var x = document.getElementsByClassName("players");
  x[6].innerHTML = "ATK: " + atk;
var x = document.getElementsByClassName("players");
  x[8].innerHTML = "DEF: " + def;

function Attack() {
  //Not the best formula, as it can heal the enemy if its defense is higher than your attack, but it works.
  enemyHp -= atk+enemyDef
  hp -= enemyAtk+def
  var x = document.getElementsByClassName("players");
  x[2].innerHTML = "HP: " + hp;
var x = document.getElementsByClassName("players");
  x[4].innerHTML = "MP: " + mp;
var x = document.getElementsByClassName("players");
  x[6].innerHTML = "ATK: " + atk;
var x = document.getElementsByClassName("players");
  x[8].innerHTML = "DEF: " + def;
        var y = document.getElementsByClassName("enemy");
  y[2].innerHTML = "HP: " + enemyHp;
var y = document.getElementsByClassName("enemy");
  y[4].innerHTML = "MP: " + enemyMp;
var y = document.getElementsByClassName("enemy");
  y[6].innerHTML = "ATK: " + enemyAtk;
var y = document.getElementsByClassName("enemy");
  y[8].innerHTML = "DEF: " + enemyDef;
  if (enemyHp <= 0) {
      encounter = 0
          attack.style.display = "none";
      movement.style.display = "block";
      }
}
function Defend() {
  def *= 1.5
  hp -= enemyAtk+def
  def /= 1.5
    var x = document.getElementsByClassName("players");
  x[2].innerHTML = "HP: " + hp;
var x = document.getElementsByClassName("players");
  x[4].innerHTML = "MP: " + mp;
var x = document.getElementsByClassName("players");
  x[6].innerHTML = "ATK: " + atk;
var x = document.getElementsByClassName("players");
  x[8].innerHTML = "DEF: " + def;
        var y = document.getElementsByClassName("enemy");
  y[2].innerHTML = "HP: " + enemyHp;
var y = document.getElementsByClassName("enemy");
  y[4].innerHTML = "MP: " + enemyMp;
var y = document.getElementsByClassName("enemy");
  y[6].innerHTML = "ATK: " + enemyAtk;
var y = document.getElementsByClassName("enemy");
  y[8].innerHTML = "DEF: " + enemyDef;
}
function Magic() {
  //To be coded...
}
