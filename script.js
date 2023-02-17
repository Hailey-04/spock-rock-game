const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.fa-regular');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

// Reset all 'selected' icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
}

// Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = 'paper';
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'scissors';
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock';
  }
}

// Add 'selected' and computerChoice
function displayComputerChoice() {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = '--- Rock';
      break;
    case 'paper':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = '--- Paper';
      break;
    case 'scissors':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = '--- Scissors';
      break;
    case 'lizard':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = '--- Lizard';
      break;
    case 'spock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = '--- Spock';
      break;
    default:
      break;
  }
}


// Check Results, increase scores, update resultText
function updateScore(playerChoice) {
  console.log(playerChoice, computerChoice)
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie."
  } else{
    const choice = choices[playerChoice];
    console.log(choice.defeats.indexOf(computerChoice));
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "You Won!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else{
      resultText.textContent = "You Lost!";
      computerScoreNumber++;
      computerChoiceEl.textContent = computerScoreNumber;
    }
  }
}
// Call functions to call turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// Passing player selection value and styling icons
function select(playerChoice) {
  checkResult(playerChoice);
  // Add 'selected' styling & playerChoice
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '--- Rock';
      break;
    case 'paper':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '--- Paper';
      break;
    case 'scissors':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '--- Scissors';
      break;
    case 'lizard':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '--- Lizard';
      break;
    case 'spock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = '--- Spock';
      break;
    default:
      break;
    }
}
