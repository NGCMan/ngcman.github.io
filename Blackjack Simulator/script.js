function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
} //Function "borrowed" by Mozilla.

var game = {
  chips = new Decimal("100")
  card1 = getRandomInt(13) + 1
  card2 = getRandomInt(13) + 1
  cardValue = 0
  hasAce = 0
}

function cardDisplay() {
  if (card1 == 1) {
  hasAce++
  document.getElementById('cardDisplay').innerHTML = "A"
  }
  if (card1 == 2) {
  document.getElementById('cardDisplay').innerHTML = "2"
  }
}

function aceCheck() {
  if (cardValue > 21) {
  if (hasAce == 1) {
  cardValue -= 10
  }
  }
}
