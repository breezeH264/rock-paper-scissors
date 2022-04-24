function game() {
  const choice = ["ROCK", "PAPER", "SCISSORS"];

  function computerPlay() {
    let selection = choice[Math.floor(Math.random() * choice.length)];
    return selection;
  }

  let computerPoints = 0;
  let playerPoints = 0;

  function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
      console.log("It's a tie! No points have been awarded.");
    }

    if (
      (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
      (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
      (computerSelection === "PAPER" && playerSelection === "ROCK")
    ) {
      console.log(
        "Computer wins! " + computerSelection + " beats " + playerSelection
      );
      computerPoints++;
    }
    if (
      (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
      (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK")
    ) {
      console.log(
        "Player wins! " + playerSelection + " beats " + computerSelection
      );
      playerPoints++;
    }
  }
  for (let i = 0; i < 5; i++) {
    computerSelection = computerPlay();
    playerSelection = prompt("Rock, paper, or scissors?").toUpperCase();
    playRound(computerSelection, playerSelection);
  }
  if (computerPoints > playerPoints) {
    console.log("GAME OVER! Computer wins the game!");
  } else if (playerPoints > computerPoints) {
    console.log("GAME OVER! Player wins the game!");
  } else {
    console.log("Tie! You both fucking suck!");
  }

  console.log("Player: " + playerPoints);
  console.log("Computer: " + computerPoints);
}

game();
