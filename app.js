let gameTurn;
let gameOver = false;
let oMarkingInterval;

//helper functions
function reloadPage() {
  location.reload();
}

function getRandomGrid() {
  let randomGrid = Math.floor(Math.random() * 9);
  return randomGrid.toString();
}

//
window.onload = function () {
  setupGrid();
  document
    .getElementById("ok-button")
    .addEventListener("click", addEventListenerToGrid);
};

function setupGrid() {
  for (let i = 0; i < 9; i++) {
    const grid = document.createElement("div");
    grid.id = i.toString();
    document.getElementById("board").appendChild(grid);
  }
}

function addEventListenerToGrid() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("board-wrapper").style.filter = "blur(0)";

  for (let i = 0; i < 9; i++) {
    let grid = document.getElementById(i);
    grid.addEventListener("click", gameStart);
    grid.isClicked = false;
    grid.mark = "empty";
  }
  gameTurn = "user";
}

function gameStart() {
  if (gameOver) {
    return;
  }

  let x = document.createElement("img");
  x.src = "./X.png";

  let popupElement = document.getElementById("popup");
  let popupText = document.getElementById("popup-text");
  let okButton = document.getElementById("ok-button");
  let closeButton = document.getElementById("close-button");

  if (!this.isClicked && gameTurn == "user") {
    this.appendChild(x);
    this.isClicked = true;
    this.mark = "x";

    gameWinner();
    gameTurn = "bot";
    oMarkingInterval = setInterval(oMarking, 1000);
  } else if (this.isClicked && gameTurn == "user") {
    popupElement.style.display = "flex";
    popupText.innerHTML = "The selected tile is occupied. Please choose another tile.";
    okButton.style.display = "none";
    closeButton.style.display = "flex";
    closeButton.addEventListener("click", closePopup);
  } else {
    popupElement.style.display = "flex";
    popupText.innerHTML = "Please wait for your turn.";
    okButton.style.display = "none";
    closeButton.style.display = "flex";
    closeButton.addEventListener("click", closePopup);
  }

  function closePopup() {
    popupElement.style.display = "none";
  }
}

function oMarking() {
  if (gameOver) {
    return;
  }

  clearInterval(oMarkingInterval);

  let randomGrid = getRandomGrid();

  if (gameTurn == "bot") {
    let o = document.createElement("img");
    o.src = "./O.png";

    let botGrid = document.getElementById(randomGrid);

    if (botGrid.isClicked) {
      oMarking();
    } else {
      botGrid.appendChild(o);
      botGrid.isClicked = true;
      botGrid.mark = "o";
      gameWinner();
      gameTurn = "user";
    }
  }
}

function gameWinner() {
  let tile0 = document.getElementById(0);
  let tile1 = document.getElementById(1);
  let tile2 = document.getElementById(2);
  let tile3 = document.getElementById(3);
  let tile4 = document.getElementById(4);
  let tile5 = document.getElementById(5);
  let tile6 = document.getElementById(6);
  let tile7 = document.getElementById(7);
  let tile8 = document.getElementById(8);

  let winner = "";

  //0,1,2
  if (tile0.mark == "x" && tile1.mark == "x" && tile2.mark == "x") {
    gameOver = true;
    winner = "user";
    winnerPopup(winner);
  } else if (tile0.mark == "o" && tile1.mark == "o" && tile2.mark == "o") {
    gameOver = true;
    winner = "bot";
    winnerPopup(winner);
  }
  //0,3,6
  else if (tile0.mark == "x" && tile3.mark == "x" && tile6.mark == "x") {
    gameOver = true;
    winner = "user";
    winnerPopup(winner);
  } else if (tile0.mark == "o" && tile3.mark == "o" && tile6.mark == "o") {
    gameOver = true;
    winner = "bot";
    winnerPopup(winner);
  }
  //0,4,8
  else if (tile0.mark == "x" && tile4.mark == "x" && tile8.mark == "x") {
    gameOver = true;
    winner = "user";
    winnerPopup(winner);
  } else if (tile0.mark == "o" && tile4.mark == "o" && tile8.mark == "o") {
    gameOver = true;
    winner = "bot";
    winnerPopup(winner);
  }
  //1,4,7
  else if (tile1.mark == "x" && tile4.mark == "x" && tile7.mark == "x") {
    gameOver = true;
    winner = "user";
    winnerPopup(winner);
  } else if (tile1.mark == "o" && tile4.mark == "o" && tile7.mark == "o") {
    gameOver = true;
    winner = "bot";
    winnerPopup(winner);
  }
  //2,5,8
  else if (tile2.mark == "x" && tile5.mark == "x" && tile8.mark == "x") {
    gameOver = true;
    winner = "user";
    winnerPopup(winner);
  } else if (tile2.mark == "o" && tile5.mark == "o" && tile8.mark == "o") {
    gameOver = true;
    winner = "bot";
    winnerPopup(winner);
  }
  //2,4,6
  else if (tile2.mark == "x" && tile4.mark == "x" && tile6.mark == "x") {
    gameOver = true;
    winner = "user";
    winnerPopup(winner);
  } else if (tile2.mark == "o" && tile4.mark == "o" && tile6.mark == "o") {
    gameOver = true;
    winner = "bot";
    winnerPopup(winner);
  }
  //3,4,5
  else if (tile3.mark == "x" && tile4.mark == "x" && tile5.mark == "x") {
    gameOver = true;
    winner = "user";
    winnerPopup(winner);
  } else if (tile3.mark == "o" && tile4.mark == "o" && tile5.mark == "o") {
    gameOver = true;
    winner = "bot";
    winnerPopup(winner);
  }
  //6,7,8
  else if (tile6.mark == "x" && tile7.mark == "x" && tile8.mark == "x") {
    gameOver = true;
    winner = "user";
    winnerPopup(winner);
  } else if (tile6.mark == "o" && tile7.mark == "o" && tile8.mark == "o") {
    gameOver = true;
    winner = "bot";
    winnerPopup(winner);
  } else if (
    tile0.mark != "empty" &&
    tile1.mark != "empty" &&
    tile2.mark != "empty" &&
    tile3.mark != "empty" &&
    tile4.mark != "empty" &&
    tile5.mark != "empty" &&
    tile6.mark != "empty" &&
    tile7.mark != "empty" &&
    tile8.mark != "empty"
  ) {
    gameOver = true;
    winner = "none";
    winnerPopup(winner);
  } else {
    gameOver = false;
  }

  function winnerPopup(winner) {
    let popup = document.getElementById("popup");
    let popupText = document.getElementById("popup-text");
    let okButton = document.getElementById("ok-button");
    let newGameButton = document.getElementById("newGame-button");
    let closeButton = document.getElementById("close-button");

    if (winner == "user") {
      popup.style.display = "flex";
      popupText.innerHTML = "Congratulations, you win!";
      popupText.style.fontSize = "3vmin";
      okButton.style.display = "none";
      closeButton.style.display = "none";
      newGameButton.style.display = "flex";
      newGameButton.addEventListener("click", reloadPage);
    } else if (winner == "bot") {
      popup.style.display = "flex";
      popupText.innerHTML = "Sorry, you lose!";
      popupText.style.fontSize = "3vmin";
      okButton.style.display = "none";
      closeButton.style.display = "none";
      newGameButton.style.display = "flex";
      newGameButton.addEventListener("click", reloadPage);
    } else {
      popup.style.display = "flex";
      popupText.innerHTML = "No winners :(";
      popupText.style.fontSize = "3vmin";
      okButton.style.display = "none";
      closeButton.style.display = "none";
      newGameButton.style.display = "flex";
      newGameButton.addEventListener("click", reloadPage);
    }
  }

  return gameOver;
}
