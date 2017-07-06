function start() {
  document.activePlayer = "X";
}

function playerChoice(square) {
  square.innerText = document.activePlayer;
  changeTurn();
}

function changeTurn() {
  return document.activePlayer === "X" ? document.activePlayer = "O" : document.activePlayer = "X";
}