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
  if (game.card1 == 1) {
  game.hasAce++
  document.getElementById('cardDisplay').innerHTML = "A"
  }
  if (game.card1 == 2) {
  document.getElementById('cardDisplay').innerHTML = "2"
  }
}

function aceCheck() {
  if (game.cardValue > 21) {
  if (game.hasAce == 1) {
  game.cardValue -= 10
  }
  }
}
