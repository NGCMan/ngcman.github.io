neutrinos = new Decimal(0)
costs = [new Decimal("1"),new Decimal("100"),new Decimal("1e4"),new Decimal("1e6"),new Decimal("1e9"),new Decimal("1e13"),new Decimal("1e18"),new Decimal("1e24"),new Decimal("1e28"),new Decimal("1e30"),new Decimal("1e34"),new Decimal("1e39"),new Decimal("1e44"),new Decimal("1e49"),new Decimal("1e55"),new Decimal("1e60"),new Decimal("1e66"),new Decimal("1e71"),new Decimal("1e79"),new Decimal("1e86"),new Decimal("1e93"),new Decimal("1e100"),new Decimal("1e107"),new Decimal("1e114"),new Decimal("1e121"),new Decimal("1e128"),new Decimal("1e135"),new Decimal("1e142"),new Decimal("1e149"),new Decimal("1e156"),new Decimal("1e164"),new Decimal("1e172"),new Decimal("1e180"),new Decimal("1e188"),new Decimal("1e196"),new Decimal("1e204"),new Decimal("1e212"),new Decimal("1e220"),new Decimal("1e228"),new Decimal("1e236"),new Decimal("1e245"),new Decimal("1e254"),new Decimal("1e263"),new Decimal("1e272"),new Decimal("1e281"),new Decimal("1e290"),new Decimal("1e299"),new Decimal("1e308"),new Decimal("1e317"),new Decimal("1e326"),new Decimal("1e350"),new Decimal("1e375"),new Decimal("1e415"),new Decimal("1e475"),new Decimal("1e525"),new Decimal("1e650"),new Decimal("1e800"),new Decimal("1e900"),new Decimal("1e1000"),new Decimal("1e1111")]
buildings = [new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)]
multipliers = [new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1),new Decimal(1)]
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
  buildings[2] = buildings[2].plus(buildings[3].times(multipliers[3])).round()
  buildings[3] = buildings[3].plus(buildings[4].times(multipliers[4])).round()
  buildings[4] = buildings[4].plus(buildings[5].times(multipliers[5])).round()
  buildings[5] = buildings[5].plus(buildings[6].times(multipliers[6])).round()
  buildings[6] = buildings[6].plus(buildings[7].times(multipliers[7])).round()
  buildings[7] = buildings[7].plus(buildings[8].times(multipliers[8])).round()
  buildings[8] = buildings[8].plus(buildings[9].times(multipliers[9])).round()
  buildings[9] = buildings[9].plus(buildings[10].times(multipliers[10])).round()
  buildings[10] = buildings[10].plus(buildings[11].times(multipliers[11])).round()
  buildings[11] = buildings[11].plus(buildings[12].times(multipliers[12])).round()
  buildings[12] = buildings[12].plus(buildings[13].times(multipliers[13])).round()
  buildings[13] = buildings[13].plus(buildings[14].times(multipliers[14])).round()
  buildings[14] = buildings[14].plus(buildings[15].times(multipliers[15])).round()
  buildings[15] = buildings[15].plus(buildings[16].times(multipliers[16])).round()
  buildings[16] = buildings[16].plus(buildings[17].times(multipliers[17])).round()
  buildings[17] = buildings[17].plus(buildings[18].times(multipliers[18])).round()
  buildings[18] = buildings[18].plus(buildings[19].times(multipliers[19])).round()
  buildings[19] = buildings[19].plus(buildings[20].times(multipliers[20])).round()
  buildings[20] = buildings[20].plus(buildings[21].times(multipliers[21])).round()
  buildings[21] = buildings[21].plus(buildings[22].times(multipliers[22])).round()
  buildings[22] = buildings[22].plus(buildings[23].times(multipliers[23])).round()
  buildings[23] = buildings[23].plus(buildings[24].times(multipliers[24])).round()
  buildings[24] = buildings[24].plus(buildings[25].times(multipliers[25])).round()
  buildings[25] = buildings[25].plus(buildings[26].times(multipliers[26])).round()
  buildings[26] = buildings[26].plus(buildings[27].times(multipliers[27])).round()
  buildings[27] = buildings[27].plus(buildings[28].times(multipliers[28])).round()
  buildings[28] = buildings[28].plus(buildings[29].times(multipliers[29])).round()
  buildings[29] = buildings[29].plus(buildings[30].times(multipliers[30])).round()
  buildings[30] = buildings[30].plus(buildings[31].times(multipliers[31])).round()
  buildings[31] = buildings[31].plus(buildings[32].times(multipliers[32])).round()
  buildings[32] = buildings[32].plus(buildings[33].times(multipliers[33])).round()
  buildings[33] = buildings[33].plus(buildings[34].times(multipliers[34])).round()
  buildings[34] = buildings[34].plus(buildings[35].times(multipliers[35])).round()
  buildings[35] = buildings[35].plus(buildings[36].times(multipliers[36])).round()
  buildings[36] = buildings[36].plus(buildings[37].times(multipliers[37])).round()
  buildings[37] = buildings[37].plus(buildings[38].times(multipliers[38])).round()
  buildings[38] = buildings[38].plus(buildings[39].times(multipliers[39])).round()
  buildings[39] = buildings[39].plus(buildings[40].times(multipliers[40])).round()
  buildings[40] = buildings[40].plus(buildings[41].times(multipliers[41])).round()
  buildings[41] = buildings[41].plus(buildings[42].times(multipliers[42])).round()
  buildings[42] = buildings[42].plus(buildings[43].times(multipliers[43])).round()
  buildings[43] = buildings[43].plus(buildings[44].times(multipliers[44])).round()
  buildings[44] = buildings[44].plus(buildings[45].times(multipliers[45])).round()
  buildings[45] = buildings[45].plus(buildings[46].times(multipliers[46])).round()
  buildings[46] = buildings[46].plus(buildings[47].times(multipliers[47])).round()
  buildings[47] = buildings[47].plus(buildings[48].times(multipliers[48])).round()
  buildings[48] = buildings[48].plus(buildings[49].times(multipliers[49])).round()
  buildings[49] = buildings[49].plus(buildings[50].times(multipliers[50])).round()
  buildings[50] = buildings[50].plus(buildings[51].times(multipliers[51])).round()
  buildings[51] = buildings[51].plus(buildings[52].times(multipliers[52])).round()
  buildings[52] = buildings[52].plus(buildings[53].times(multipliers[53])).round()
  buildings[53] = buildings[53].plus(buildings[54].times(multipliers[54])).round()
  buildings[54] = buildings[54].plus(buildings[55].times(multipliers[55])).round()
  buildings[55] = buildings[55].plus(buildings[56].times(multipliers[56])).round()
  buildings[56] = buildings[56].plus(buildings[57].times(multipliers[57])).round()
  buildings[57] = buildings[57].plus(buildings[58].times(multipliers[58])).round()
  buildings[58] = buildings[58].plus(buildings[59].times(multipliers[59])).round()
  buildings[59] = buildings[59].plus(buildings[60].times(multipliers[60])).round()
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

