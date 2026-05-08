const qs = (selector) => document.querySelector(selector);

const qsChild = (selector, parent = document) => parent.querySelector(selector);

const qsChildAll = (selector, parent = document) =>
  parent.querySelectorAll(selector);

const game = qs(".game");

const gameSelectors = {
  start: qsChild("#start", game),
  reset: qsChild("#reset", game),
  winner: qsChild("#winner", game),
  cards: qsChildAll(".cards div", game),
  scorePlayer0: qsChild("#scorePlayer0", game),
  scorePlayer1: qsChild("#scorePlayer1", game),
};

const { start, reset, winner, cards, scorePlayer0, scorePlayer1 } =
  gameSelectors;

start.addEventListener("click", startGame);
reset.addEventListener("click", resetGame);
window.addEventListener("load", () => cleanBoard());

function startGame() {
  if (endGame) {
    alert(`Clique no botão "Reset Game" para reiniciar o jogo!`);
    return;
  }
  gameRunning = true;
  start.disabled = true;
  start.style.backgroundColor = "green";
}

cards.forEach((card) =>
  card.addEventListener("click", (e) => {
    if (endGame) {
      alert(`Clique no botão "Reset Game" para reiniciar o jogo!`);
      return;
    }

    if (!gameRunning) {
      alert(`Clique no botão "Start Game" para iniciar o jogo!`);
      return;
    }
    setPoints(e);
  }),
);

function resetGame() {
  start.style.backgroundColor = "rgb(43, 76, 114)";
  cleanBoard();
}
