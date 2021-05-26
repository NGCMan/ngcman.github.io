var random = 0
var gayness = 0
function gayTest() {
  random = Math.floor(Math.random() * 2)
  if (random == 0) {
    gayness -= 1;
    gayUpdate()
  }
  if (random == 1) {
    gayness += 1;
    gayUpdate()
  }
}

function gayUpdate() {
  if (gayness > 0) {
   document.getElementById("gaynessMeter").innerHTML = "You are gay^" + gayness
  }
  if (gayness < 0) {
   document.getElementById("gaynessMeter").innerHTML = "You are straight^" + -gayness
  }
  if (gayness == 0) {
    document.getElementById("gaynessMeter").innerHTML = "You are neither straight or gay."
  }
  }
