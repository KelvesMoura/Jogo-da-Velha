const playerSymbols = ["o", "x"];
let gameRunning = false;
let endGame = false;
let points = "";
let player = 0;
const winnerResults = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function setPoints(e) {
  const position = Number(e.target.id);

  if (player == 0) {
    updateDiv(0, position);
    player = 1;
  } else {
    updateDiv(1, position);
    player = 0;
  }

  checkWinner();
}

function updateDiv(playerNumber, position) {
  if (localStorage.getItem(`player${playerNumber}`)) {
    points = `${localStorage.getItem(`player${playerNumber}`)}; ${position}`;
    localStorage.setItem(`player${playerNumber}`, points);
  } else {
    localStorage.setItem(`player${playerNumber}`, position);
  }
  cards[position].className = playerSymbols[playerNumber];
  cards[position].classList.add("disabled");
}

function checkWinner() {
  const player0 = (localStorage.getItem("player0") || "")
    .split(";")
    .map((value) => Number(value));
  const player1 = (localStorage.getItem("player1") || "")
    .split(";")
    .map((value) => Number(value));

  const list = [player0, player1];

  list.forEach((player, i) => {
    if (
      winnerResults.some((line) => line.every((pos) => player.includes(pos)))
    ) {
      updateScore(i);
      finish(i);

      const pos = winnerResults.find((line) =>
        line.every((pos) => player.includes(pos)),
      );

      pos.forEach((item) => {
        cards[item].classList.add("winner");
        cards[item].style.backgroundColor = "green";
      });
    }

    if ([...cards].every((card) => card.classList.contains("disabled")))
      drawn();
  });
}

function updateScore(player) {
  if (player == 0) {
    scorePlayer0.innerText = Number(scorePlayer0.innerText) + 1;
  } else {
    scorePlayer1.innerText = Number(scorePlayer1.innerText) + 1;
  }
}

function finish(i) {
  const winnerValidation = i == 0 ? "Escudo" : "Espada";
  winner.innerText = `"${winnerValidation}" ganhou a Partida!`;
  start.style.backgroundColor = "gray";
  start.disabled = false;
  endGame = true;
}

function drawn() {
  winner.innerText = "O jogou acabou - Empate";
  start.style.backgroundColor = "gray";
  start.disabled = false;
  endGame = true;
}

function cleanBoard() {
  cards.forEach((card) => (card.className = ""));
  cards.forEach((card) => (card.style.backgroundColor = ""));
  localStorage.removeItem("player0");
  localStorage.removeItem("player1");
  gameRunning = false;
  endGame = false;
  start.disabled = false;
  player = 0;
  winner.innerText = "";
}
