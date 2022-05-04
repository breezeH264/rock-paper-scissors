const rps = ["ROCK", "PAPER", "SCISSORS"];

let computerPoints = 0;
let playerPoints = 0;
let round = 0;

// picks computer's choice
computerPicks = function () {
  let randomChoice = rps[Math.floor(Math.random() * rps.length)];
  return randomChoice;
};

// plays one round of rock, paper, scissors
// compares player's and computer's selection to determine winner
playRound = function (computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    roundResult.textContent = "It's a tie! Try again.";
  }

  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER")
  ) {
    computerPoints++;
    computerScore.textContent = "Computer: " + computerPoints;
    roundResult.textContent =
      computerSelection +
      " beats " +
      playerSelection +
      ". Computer wins this round!";
  }

  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playerPoints++;
    playerScore.textContent = "Player: " + playerPoints;
    roundResult.textContent =
      playerSelection +
      " beats " +
      computerSelection +
      ". Player wins this round!";
  }
  if (playerPoints === 5 || computerPoints === 5) {
    gameResult.textContent = "Game over!";
    btnRock.style.visibility = "hidden";
    btnPaper.style.visibility = "hidden";
    btnScissors.style.visibility = "hidden";
    resetButton.style.visibility = "visible";
  }
};

const btnRock = document.querySelector("#ROCK");
btnRock.addEventListener("click", () => {
  computerSelection = computerPicks();
  playerSelection = "ROCK";
  playRound(computerSelection, playerSelection);
  round++;
});

const btnScissors = document.querySelector("#SCISSORS");
btnScissors.addEventListener("click", () => {
  computerSelection = computerPicks();
  playerSelection = "SCISSORS";
  playRound(computerSelection, playerSelection);
  round++;
});

const btnPaper = document.querySelector("#PAPER");
btnPaper.addEventListener("click", () => {
  computerSelection = computerPicks();
  playerSelection = "PAPER";
  playRound(computerSelection, playerSelection);
  round++;
});

const resetButton = document.querySelector("#RESET");
resetButton.addEventListener("click", () => {
  resetButton.style.visibility = "hidden";
  btnRock.style.visibility = "visible";
  btnPaper.style.visibility = "visible";
  btnScissors.style.visibility = "visible";

  playerPoints = 0;
  computerPoints = 0;
  playerScore.textContent = "Player: 0";
  computerScore.textContent = "Computer: 0";
  gameResult.textContent = "";
  roundResult.textContent = "";
});

resetButton.style.visibility = "hidden";

const container = document.querySelector(".container");

playerScore = document.createElement("p");
playerScore.classList.add("score");
playerScore.textContent = "Player: 0";
playerScore.style.color = "red";
container.appendChild(playerScore);

computerScore = document.createElement("p");
computerScore.classList.add("score");
computerScore.textContent = "Computer: 0";
computerScore.style.color = "blue";
container.appendChild(computerScore);

roundResult = document.createElement("p");
container.appendChild(roundResult);

gameResult = document.createElement("p");
container.appendChild(gameResult);
