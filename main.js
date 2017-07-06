let start = () => {
  document.activePlayer = "X";
  setText(document.activePlayer + " can start!")
}

let setText = (message) => {
  document.getElementById("user-message").innerText = message;
}

let playerChoice = (square) => {
  if (square.innerText=="") {
    square.innerText = document.activePlayer;
    changeTurn();
  } else {
    setText("Choose another move...");
  }
}

let changeTurn = () => {
  if (document.activePlayer === "X") {
    document.activePlayer = "O"
  }
  else {
    document.activePlayer = "X"
  }
  setText("It is now " + document.activePlayer + " time!");
  return;
}


let getBox = (number) => {
  return document.getElementById("square" + number).innerText;
} 