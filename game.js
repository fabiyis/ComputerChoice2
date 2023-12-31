const prompt = require('prompt-sync')();

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

function playRound(playerSelection,computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
      return "it's a tie";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection ==='rock')
      ) {
      return `"You Won! ${playerSelection} beats ${computerSelection}"`;
    } else {
      return `"You Lose! ${computerSelection} beats ${playerSelection}"`;
    }
  }

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors):');
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    console.log(`Round ${i + 1}: ${result}`);

    if (result.includes('Won')) {
        playerScore++;
     } else if (result.includes('Lose')) {
       computerScore++;
     }
    }

   console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);

   if (playerScore > computerScore) {
    console.log('Congratulations! You win the game.');
  } else if (playerScore < computerScore) {
    console.log('Sorry, you lose the game.');
  } else {
    console.log('It\'s a tie game.');
  }
}

 game();