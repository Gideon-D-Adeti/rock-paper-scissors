const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultsElement = document.querySelector(".results");

function createPElement(text) {
  const pElement = document.createElement("p");
  pElement.textContent = text;
  return pElement;
}

function appendPElement(pElement) {
  resultsElement.innerHTML = ""; // Clear previous results
  resultsElement.appendChild(pElement);
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  if (playerChoice === computerChoice) {
    appendPElement(createPElement("It's a tie!"));
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    appendPElement(
      createPElement(`You Win! ${playerSelection} beats ${computerSelection}`)
    );
  } else {
    appendPElement(
      createPElement(`You Lose! ${computerSelection} beats ${playerSelection}`)
    );
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
