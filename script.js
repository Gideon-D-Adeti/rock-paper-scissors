const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultsElement = document.querySelector(".results");

let totalRounds = 0;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function displayResults() {
  resultsElement.innerHTML = ""; // Clear previous results

  let firstPElement = createPElement("Game Over!");
  firstPElement.setAttribute(
    "style",
    "font-size: 24px; text-transform: uppercase;"
  );

  let secondPElement = createPElement(`Player Score: ${playerScore}`);
  let thirdPElement = createPElement(`Computer Score: ${computerScore}`);
  let forthPElement = createPElement(`Tie Score: ${tieScore}`);

  resultsElement.appendChild(firstPElement);
  resultsElement.appendChild(secondPElement);
  resultsElement.appendChild(thirdPElement);
  resultsElement.appendChild(forthPElement);

  let fifthPElement = createPElement("");
  fifthPElement.setAttribute("style", "font-size: 18px; font-weight: bold;");

  if (playerScore > computerScore) {
    fifthPElement.textContent = "Congratulations! You win the game!";
    fifthPElement.setAttribute("style", "color: green;");
  } else if (computerScore > playerScore) {
    fifthPElement.textContent = "Sorry, you lose the game!";
    fifthPElement.setAttribute("style", "color: red;");
  } else {
    fifthPElement.textContent = "It's a tie!";
    fifthPElement.setAttribute("style", "color: blue;");
  }
  resultsElement.appendChild(fifthPElement);
}

function createPElement(text) {
  const pElement = document.createElement("p");
  pElement.textContent = text;
  return pElement;
}

function displayResult(pElement) {
  resultsElement.innerHTML = ""; // Clear previous results
  resultsElement.appendChild(pElement);
}

function resetRoundsAndScores() {
  totalRounds = 0;
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  totalRounds++;

  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  let result;
  if (playerChoice === computerChoice) {
    tieScore++;
    result = createPElement("It's a tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    result = createPElement(
      `You Win! ${playerSelection} beats ${computerSelection}`
    );
  } else {
    computerScore++;
    result = createPElement(
      `You Lose! ${computerSelection} beats ${playerSelection}`
    );
  }

  displayResult(result);

  if (totalRounds === 5) {
    displayResults();
    resetRoundsAndScores();
  }
}

rockButton.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
});
