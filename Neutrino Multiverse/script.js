neutrinos = new Decimal(0)
building1 = new Decimal(0)
cost1 = new Decimal(10)
multiplier1 = new Decimal(1)
building2 = new Decimal(0)
cost2 = new Decimal(100)
multiplier2 = new Decimal(1)
building3 = new Decimal(0)
cost3 = new Decimal(10000)
multiplier3 = new Decimal(1)
building4 = new Decimal(0)
cost4 = new Decimal(1e6)
multiplier4 = new Decimal(1)
building5 = new Decimal(0)
cost5 = new Decimal(1e9)
multiplier5 = new Decimal(1)
building6 = new Decimal(0)
cost6 = new Decimal(1e13)
multiplier6 = new Decimal(1)
building7 = new Decimal(0)
cost7 = new Decimal(1e18)
multiplier7 = new Decimal(1)
building8 = new Decimal(0)
cost8 = new Decimal(1e24)
multiplier8 = new Decimal(1)
document.getElementById("display").innerHTML = "You have " + neutrinos + " neutrinos.";
function increment() {
  neutrinos = neutrinos.plus(building1.times(multiplier1)).plus(1).round();
  building1 = building1.plus(building2.times(multiplier2)).round()
  building2 = building2.plus(building3.times(multiplier3)).round()
  building3 = building3.plus(building4.times(multiplier4)).round()
  building4 = building4.plus(building5.times(multiplier5)).round()
  building5 = building5.plus(building6.times(multiplier6)).round()
  building6 = building6.plus(building7.times(multiplier7)).round()
  building7 = building7.plus(building8.times(multiplier8)).round()
  neutrinos = neutrinos.round()
  document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "Building 1:<br> Amount: " + building1 + ", Multiplier: " + " x" + multiplier1 + ", Cost:" + cost1;
document.getElementById("building2").innerHTML = "Building 2:<br> Amount: " + building2 + ", Multiplier: " + " x" + multiplier2 + ", Cost:" + cost2;
document.getElementById("building3").innerHTML = "Building 3:<br> Amount: " + building3 + ", Multiplier: " + " x" + multiplier3 + ", Cost:" + cost3;
document.getElementById("building4").innerHTML = "Building 4:<br> Amount: " + building4 + ", Multiplier: " + " x" + multiplier4 + ", Cost:" + cost4;
document.getElementById("building5").innerHTML = "Building 5:<br> Amount: " + building5 + ", Multiplier: " + " x" + multiplier5 + ", Cost:" + cost5;
document.getElementById("building6").innerHTML = "Building 6:<br> Amount: " + building6 + ", Multiplier: " + " x" + multiplier6 + ", Cost:" + cost6;
document.getElementById("building7").innerHTML = "Building 7:<br> Amount: " + building7 + ", Multiplier: " + " x" + multiplier7 + ", Cost:" + cost7;
document.getElementById("building8").innerHTML = "Building 8:<br> Amount: " + building8 + ", Multiplier: " + " x" + multiplier8 + ", Cost:" + cost8;
}
function buy1() {
  if (neutrinos.greaterThan(cost1)) {
    neutrinos = neutrinos.minus(cost1)
    building1 = building1.plus(1).round()
    multiplier1 = multiplier1.times(100)
    multiplier1 = multiplier1.times(1.05).round()
    multiplier1 = multiplier1.div(100)
    cost1 = cost1.times(100)
    cost1 = cost1.times(2.15).round()
    cost1 = cost1.div(100)
    neutrinos = neutrinos.round()
      document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "Building 1:<br> Amount: " + building1 + ", Multiplier: " + " x" + multiplier1 + ", Cost:" + cost1;
document.getElementById("building2").innerHTML = "Building 2:<br> Amount: " + building2 + ", Multiplier: " + " x" + multiplier2 + ", Cost:" + cost2;
document.getElementById("building3").innerHTML = "Building 3:<br> Amount: " + building3 + ", Multiplier: " + " x" + multiplier3 + ", Cost:" + cost3;
document.getElementById("building4").innerHTML = "Building 4:<br> Amount: " + building4 + ", Multiplier: " + " x" + multiplier4 + ", Cost:" + cost4;
document.getElementById("building5").innerHTML = "Building 5:<br> Amount: " + building5 + ", Multiplier: " + " x" + multiplier5 + ", Cost:" + cost5;
document.getElementById("building6").innerHTML = "Building 6:<br> Amount: " + building6 + ", Multiplier: " + " x" + multiplier6 + ", Cost:" + cost6;
document.getElementById("building7").innerHTML = "Building 7:<br> Amount: " + building7 + ", Multiplier: " + " x" + multiplier7 + ", Cost:" + cost7;
document.getElementById("building8").innerHTML = "Building 8:<br> Amount: " + building8 + ", Multiplier: " + " x" + multiplier8 + ", Cost:" + cost8;
  }
}
function buy2() {
  if (neutrinos.greaterThan(cost2)) {
    neutrinos = neutrinos.minus(cost2)
    building2 = building2.plus(1).round()
	multiplier2 = multiplier2.times(100)
    multiplier2 = multiplier2.times(1.05).round()
	multiplier2 = multiplier2.div(100)
	cost2 = cost2.times(100)
    cost2 = cost2.times(2.15).round()
	cost2 = cost2.div(100)
         document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "Building 1:<br> Amount: " + building1 + ", Multiplier: " + " x" + multiplier1 + ", Cost:" + cost1;
document.getElementById("building2").innerHTML = "Building 2:<br> Amount: " + building2 + ", Multiplier: " + " x" + multiplier2 + ", Cost:" + cost2;
document.getElementById("building3").innerHTML = "Building 3:<br> Amount: " + building3 + ", Multiplier: " + " x" + multiplier3 + ", Cost:" + cost3;
document.getElementById("building4").innerHTML = "Building 4:<br> Amount: " + building4 + ", Multiplier: " + " x" + multiplier4 + ", Cost:" + cost4;
document.getElementById("building5").innerHTML = "Building 5:<br> Amount: " + building5 + ", Multiplier: " + " x" + multiplier5 + ", Cost:" + cost5;
document.getElementById("building6").innerHTML = "Building 6:<br> Amount: " + building6 + ", Multiplier: " + " x" + multiplier6 + ", Cost:" + cost6;
document.getElementById("building7").innerHTML = "Building 7:<br> Amount: " + building7 + ", Multiplier: " + " x" + multiplier7 + ", Cost:" + cost7;
document.getElementById("building8").innerHTML = "Building 8:<br> Amount: " + building8 + ", Multiplier: " + " x" + multiplier8 + ", Cost:" + cost8;
  }
}
function buy3() {
  if (neutrinos.greaterThan(cost3)) {
    neutrinos = neutrinos.minus(cost3)
    building3 = building3.plus(1).round()
	multiplier3 = multiplier3.times(100)
    multiplier3 = multiplier3.times(1.05).round()
	multiplier3 = multiplier3.div(100)
	cost3 = cost3.times(100)
    cost3 = cost3.times(2.15).round()
	cost3 = cost3.div(100)
         document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "Building 1:<br> Amount: " + building1 + ", Multiplier: " + " x" + multiplier1 + ", Cost:" + cost1;
document.getElementById("building2").innerHTML = "Building 2:<br> Amount: " + building2 + ", Multiplier: " + " x" + multiplier2 + ", Cost:" + cost2;
document.getElementById("building3").innerHTML = "Building 3:<br> Amount: " + building3 + ", Multiplier: " + " x" + multiplier3 + ", Cost:" + cost3;
document.getElementById("building4").innerHTML = "Building 4:<br> Amount: " + building4 + ", Multiplier: " + " x" + multiplier4 + ", Cost:" + cost4;
document.getElementById("building5").innerHTML = "Building 5:<br> Amount: " + building5 + ", Multiplier: " + " x" + multiplier5 + ", Cost:" + cost5;
document.getElementById("building6").innerHTML = "Building 6:<br> Amount: " + building6 + ", Multiplier: " + " x" + multiplier6 + ", Cost:" + cost6;
document.getElementById("building7").innerHTML = "Building 7:<br> Amount: " + building7 + ", Multiplier: " + " x" + multiplier7 + ", Cost:" + cost7;
document.getElementById("building8").innerHTML = "Building 8:<br> Amount: " + building8 + ", Multiplier: " + " x" + multiplier8 + ", Cost:" + cost8;
  }
}
function buy4() {
  if (neutrinos.greaterThan(cost4)) {
    neutrinos = neutrinos.minus(cost4)
    building4 = building4.plus(1).round()
	multiplier4 = multiplier4.times(100)
    multiplier4 = multiplier4.times(1.05).round()
	multiplier4 = multiplier4.div(100)
	cost4 = cost4.times(100)
    cost4 = cost4.times(2.15).round()
	cost4 = cost4.div(100)
         document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "Building 1:<br> Amount: " + building1 + ", Multiplier: " + " x" + multiplier1 + ", Cost:" + cost1;
document.getElementById("building2").innerHTML = "Building 2:<br> Amount: " + building2 + ", Multiplier: " + " x" + multiplier2 + ", Cost:" + cost2;
document.getElementById("building3").innerHTML = "Building 3:<br> Amount: " + building3 + ", Multiplier: " + " x" + multiplier3 + ", Cost:" + cost3;
document.getElementById("building4").innerHTML = "Building 4:<br> Amount: " + building4 + ", Multiplier: " + " x" + multiplier4 + ", Cost:" + cost4;
document.getElementById("building5").innerHTML = "Building 5:<br> Amount: " + building5 + ", Multiplier: " + " x" + multiplier5 + ", Cost:" + cost5;
document.getElementById("building6").innerHTML = "Building 6:<br> Amount: " + building6 + ", Multiplier: " + " x" + multiplier6 + ", Cost:" + cost6;
document.getElementById("building7").innerHTML = "Building 7:<br> Amount: " + building7 + ", Multiplier: " + " x" + multiplier7 + ", Cost:" + cost7;
document.getElementById("building8").innerHTML = "Building 8:<br> Amount: " + building8 + ", Multiplier: " + " x" + multiplier8 + ", Cost:" + cost8;
  }
}
function buy5() {
  if (neutrinos.greaterThan(cost5)) {
    neutrinos = neutrinos.minus(cost5)
    building5 = building5.plus(1).round()
	multiplier5 = multiplier5.times(100)
    multiplier5 = multiplier5.times(1.05).round()
	multiplier5 = multiplier5.div(100)
	cost5 = cost5.times(100)
    cost5 = cost5.times(2.15).round()
	cost5 = cost5.div(100)
         document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "Building 1:<br> Amount: " + building1 + ", Multiplier: " + " x" + multiplier1 + ", Cost:" + cost1;
document.getElementById("building2").innerHTML = "Building 2:<br> Amount: " + building2 + ", Multiplier: " + " x" + multiplier2 + ", Cost:" + cost2;
document.getElementById("building3").innerHTML = "Building 3:<br> Amount: " + building3 + ", Multiplier: " + " x" + multiplier3 + ", Cost:" + cost3;
document.getElementById("building4").innerHTML = "Building 4:<br> Amount: " + building4 + ", Multiplier: " + " x" + multiplier4 + ", Cost:" + cost4;
document.getElementById("building5").innerHTML = "Building 5:<br> Amount: " + building5 + ", Multiplier: " + " x" + multiplier5 + ", Cost:" + cost5;
document.getElementById("building6").innerHTML = "Building 6:<br> Amount: " + building6 + ", Multiplier: " + " x" + multiplier6 + ", Cost:" + cost6;
document.getElementById("building7").innerHTML = "Building 7:<br> Amount: " + building7 + ", Multiplier: " + " x" + multiplier7 + ", Cost:" + cost7;
document.getElementById("building8").innerHTML = "Building 8:<br> Amount: " + building8 + ", Multiplier: " + " x" + multiplier8 + ", Cost:" + cost8;
  }
}
function buy6() {
  if (neutrinos.greaterThan(cost6)) {
    neutrinos = neutrinos.minus(cost6)
    building6 = building6.plus(1).round()
	multiplier6 = multiplier6.times(100)
    multiplier6 = multiplier6.times(1.05).round()
	multiplier6 = multiplier6.div(100)
	cost6 = cost6.times(100)
    cost6 = cost6.times(2.15).round()
	cost6 = cost6.div(100)
         document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "Building 1:<br> Amount: " + building1 + ", Multiplier: " + " x" + multiplier1 + ", Cost:" + cost1;
document.getElementById("building2").innerHTML = "Building 2:<br> Amount: " + building2 + ", Multiplier: " + " x" + multiplier2 + ", Cost:" + cost2;
document.getElementById("building3").innerHTML = "Building 3:<br> Amount: " + building3 + ", Multiplier: " + " x" + multiplier3 + ", Cost:" + cost3;
document.getElementById("building4").innerHTML = "Building 4:<br> Amount: " + building4 + ", Multiplier: " + " x" + multiplier4 + ", Cost:" + cost4;
document.getElementById("building5").innerHTML = "Building 5:<br> Amount: " + building5 + ", Multiplier: " + " x" + multiplier5 + ", Cost:" + cost5;
document.getElementById("building6").innerHTML = "Building 6:<br> Amount: " + building6 + ", Multiplier: " + " x" + multiplier6 + ", Cost:" + cost6;
document.getElementById("building7").innerHTML = "Building 7:<br> Amount: " + building7 + ", Multiplier: " + " x" + multiplier7 + ", Cost:" + cost7;
document.getElementById("building8").innerHTML = "Building 8:<br> Amount: " + building8 + ", Multiplier: " + " x" + multiplier8 + ", Cost:" + cost8;
  }
}
function buy7() {
  if (neutrinos.greaterThan(cost7)) {
    neutrinos = neutrinos.minus(cost7)
    building7 = building7.plus(1).round()
	multiplier7 = multiplier7.times(100)
    multiplier7 = multiplier7.times(1.05).round()
	multiplier7 = multiplier7.div(100)
	cost7 = cost7.times(100)
    cost7 = cost7.times(2.15).round()
	cost7 = cost7.div(100)
         document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "Building 1:<br> Amount: " + building1 + ", Multiplier: " + " x" + multiplier1 + ", Cost:" + cost1;
document.getElementById("building2").innerHTML = "Building 2:<br> Amount: " + building2 + ", Multiplier: " + " x" + multiplier2 + ", Cost:" + cost2;
document.getElementById("building3").innerHTML = "Building 3:<br> Amount: " + building3 + ", Multiplier: " + " x" + multiplier3 + ", Cost:" + cost3;
document.getElementById("building4").innerHTML = "Building 4:<br> Amount: " + building4 + ", Multiplier: " + " x" + multiplier4 + ", Cost:" + cost4;
document.getElementById("building5").innerHTML = "Building 5:<br> Amount: " + building5 + ", Multiplier: " + " x" + multiplier5 + ", Cost:" + cost5;
document.getElementById("building6").innerHTML = "Building 6:<br> Amount: " + building6 + ", Multiplier: " + " x" + multiplier6 + ", Cost:" + cost6;
document.getElementById("building7").innerHTML = "Building 7:<br> Amount: " + building7 + ", Multiplier: " + " x" + multiplier7 + ", Cost:" + cost7;
document.getElementById("building8").innerHTML = "Building 8:<br> Amount: " + building8 + ", Multiplier: " + " x" + multiplier8 + ", Cost:" + cost8;
  }
}
function buy8() {
  if (neutrinos.greaterThan(cost8)) {
    neutrinos = neutrinos.minus(cost8)
    building8 = building8.plus(1).round()
	multiplier8 = multiplier8.times(100)
    multiplier8 = multiplier8.times(1.05).round()
	multiplier8 = multiplier8.div(100)
	cost8 = cost8.times(100)
    cost8 = cost8.times(2.15).round()
	cost8 = cost8.div(100)
         document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "Building 1:<br> Amount: " + building1 + ", Multiplier: " + " x" + multiplier1 + ", Cost:" + cost1;
document.getElementById("building2").innerHTML = "Building 2:<br> Amount: " + building2 + ", Multiplier: " + " x" + multiplier2 + ", Cost:" + cost2;
document.getElementById("building3").innerHTML = "Building 3:<br> Amount: " + building3 + ", Multiplier: " + " x" + multiplier3 + ", Cost:" + cost3;
document.getElementById("building4").innerHTML = "Building 4:<br> Amount: " + building4 + ", Multiplier: " + " x" + multiplier4 + ", Cost:" + cost4;
document.getElementById("building5").innerHTML = "Building 5:<br> Amount: " + building5 + ", Multiplier: " + " x" + multiplier5 + ", Cost:" + cost5;
document.getElementById("building6").innerHTML = "Building 6:<br> Amount: " + building6 + ", Multiplier: " + " x" + multiplier6 + ", Cost:" + cost6;
document.getElementById("building7").innerHTML = "Building 7:<br> Amount: " + building7 + ", Multiplier: " + " x" + multiplier7 + ", Cost:" + cost7;
document.getElementById("building8").innerHTML = "Building 8:<br> Amount: " + building8 + ", Multiplier: " + " x" + multiplier8 + ", Cost:" + cost8;
  }
}
