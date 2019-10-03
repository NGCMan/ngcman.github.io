neutrinos = new Decimal(0)
costs = [new Decimal(10),new Decimal(100),new Decimal(10000)]
buildings = [new Decimal(0),new Decimal(0),new Decimal(0)]
multipliers = [new Decimal(1), new Decimal(1),new Decimal(1)]
buildingnumber = new Decimal(0)
//building1 = new Decimal(0)
//cost1 = new Decimal(10)
//multiplier1 = new Decimal(1)
//building2 = new Decimal(0)
//cost2 = new Decimal(100)
//multiplier2 = new Decimal(1)
//building3 = new Decimal(0)
//cost3 = new Decimal(10000)
//multiplier3 = new Decimal(1)
//building4 = new Decimal(0)
//cost4 = new Decimal(1e6)
//multiplier4 = new Decimal(1)
//building5 = new Decimal(0)
//cost5 = new Decimal(1e9)
//multiplier5 = new Decimal(1)
//building6 = new Decimal(0)
//cost6 = new Decimal(1e13)
//multiplier6 = new Decimal(1)
//building7 = new Decimal(0)
//cost7 = new Decimal(1e18)
//multiplier7 = new Decimal(1)
//building8 = new Decimal(0)
//cost8 = new Decimal(1e24)
//multiplier8 = new Decimal(1)
function buyup() {
  buildingnumber = buildingnumber.add(1)
  if (buildingnumber.greaterThan(new Decimal(119))) {
	buildingnumber = new Decimal(119)
}
  costs[buildingnumber] = costs[buildingnumber]
  buildings[buildingnumber] = buildings[buildingnumber]
  multipliers[buildingnumber] = multipliers[buildingnumber]
      document.getElementById("displaybuilding").innerHTML =
"You are buying building number " + buildingnumber.add(1) + ".";
    document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "Building " + buildingnumber.add(1) + ":<br> Amount: " + buildings[buildingnumber] + ", Multiplier: " + " x" + multipliers[buildingnumber] + ", Cost:" + costs[buildingnumber];
}

function buydown() {
  buildingnumber = buildingnumber.sub(1)
if (buildingnumber.lessThan(new Decimal(0))) {
	buildingnumber = new Decimal(0)
}
  costs[buildingnumber] = costs[buildingnumber]
  buildings[buildingnumber] = buildings[buildingnumber]
  multipliers[buildingnumber] = multipliers[buildingnumber]
      document.getElementById("displaybuilding").innerHTML =
"You are buying building number " + buildingnumber.add(1) + ".";
    document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "Building " + buildingnumber.add(1) + ":<br> Amount: " + buildings[buildingnumber] + ", Multiplier: " + " x" + multipliers[buildingnumber] + ", Cost:" + costs[buildingnumber];

}

function increment() {
  neutrinos = neutrinos.plus(buildings[0].times(multipliers[0])).plus(1).round();
  buildings[0] = buildings[0].plus(buildings[1].times(multipliers[1])).round()
  buildings[1] = buildings[1].plus(buildings[2].times(multipliers[2])).round()
  //building3 = building3.plus(building4.times(multiplier4)).round()
  //building4 = building4.plus(building5.times(multiplier5)).round()
  //building5 = building5.plus(building6.times(multiplier6)).round()
  //building6 = building6.plus(building7.times(multiplier7)).round()
  //building7 = building7.plus(building8.times(multiplier8)).round()
  //neutrinos = neutrinos.round()
  document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "Building " + buildingnumber.add(1) + ":<br> Amount: " + buildings[buildingnumber] + ", Multiplier: " + " x" + multipliers[buildingnumber] + ", Cost:" + costs[buildingnumber];
//document.getElementById("building2").innerHTML = "Building 2:<br> Amount: " + building2 + ", Multiplier: " + " x" + multiplier2 + ", Cost:" + cost2;
//document.getElementById("building3").innerHTML = "Building 3:<br> Amount: " + building3 + ", Multiplier: " + " x" + multiplier3 + ", Cost:" + cost3;
//document.getElementById("building4").innerHTML = "Building 4:<br> Amount: " + building4 + ", Multiplier: " + " x" + multiplier4 + ", Cost:" + cost4;
//document.getElementById("building5").innerHTML = "Building 5:<br> Amount: " + building5 + ", Multiplier: " + " x" + multiplier5 + ", Cost:" + cost5;
//document.getElementById("building6").innerHTML = "Building 6:<br> Amount: " + building6 + ", Multiplier: " + " x" + multiplier6 + ", Cost:" + cost6;
//document.getElementById("building7").innerHTML = "Building 7:<br> Amount: " + building7 + ", Multiplier: " + " x" + multiplier7 + ", Cost:" + cost7;
//document.getElementById("building8").innerHTML = "Building 8:<br> Amount: " + building8 + ", Multiplier: " + " x" + multiplier8 + ", Cost:" + cost8;
}
function buyx() {
  if (neutrinos.greaterThan(costs[buildingnumber])) {
    neutrinos = neutrinos.minus(costs[buildingnumber])
    buildings[buildingnumber] = buildings[buildingnumber].plus(1).round()
    multipliers[buildingnumber] = multipliers[buildingnumber].times(100)
    multipliers[buildingnumber] = multipliers[buildingnumber].times(1.05).round()
    multipliers[buildingnumber] = multipliers[buildingnumber].div(100)
    costs[buildingnumber] = costs[buildingnumber].times(100)
    costs[buildingnumber] = costs[buildingnumber].times(2.15).round()
    costs[buildingnumber] = costs[buildingnumber].div(100)
    neutrinos = neutrinos.round()
      document.getElementById("display").innerHTML =
"You have " + neutrinos + " neutrinos.";
document.getElementById("building1").innerHTML = "Building " + buildingnumber.add(1) + ":<br> Amount: " + buildings[buildingnumber] + ", Multiplier: " + " x" + multipliers[buildingnumber] + ", Cost:" + costs[buildingnumber];
//document.getElementById("building2").innerHTML = "Building 2:<br> Amount: " + building2 + ", Multiplier: " + " x" + multiplier2 + ", Cost:" + cost2;
//document.getElementById("building3").innerHTML = "Building 3:<br> Amount: " + building3 + ", Multiplier: " + " x" + multiplier3 + ", Cost:" + cost3;
//document.getElementById("building4").innerHTML = "Building 4:<br> Amount: " + building4 + ", Multiplier: " + " x" + multiplier4 + ", Cost:" + cost4;
//document.getElementById("building5").innerHTML = "Building 5:<br> Amount: " + building5 + ", Multiplier: " + " x" + multiplier5 + ", Cost:" + cost5;
//document.getElementById("building6").innerHTML = "Building 6:<br> Amount: " + building6 + ", Multiplier: " + " x" + multiplier6 + ", Cost:" + cost6;
//document.getElementById("building7").innerHTML = "Building 7:<br> Amount: " + building7 + ", Multiplier: " + " x" + multiplier7 + ", Cost:" + cost7;
//document.getElementById("building8").innerHTML = "Building 8:<br> Amount: " + building8 + ", Multiplier: " + " x" + multiplier8 + ", Cost:" + cost8;
  }
}

