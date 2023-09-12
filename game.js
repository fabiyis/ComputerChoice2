const prompt = require('prompt-sync')();

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) 
       {return "its is a tie";
    }
    else if (
       (playerSelection === 'rock' && computerSelection === 'scissors') ||
       (playerSelection === 'scissors' && computerSelection === 'paper') ||
       (playerSelection === 'paper' && computerSelection ==='rock')) 
    {
    return 'You Won! ${playerSelection} beats ${computerSelection}';
    }
    else {
        return 'You Lose! ${computerSelection} beats ${playerSelection}';
    }
    }

    console.log(`Welcome to Rock, Paper, Scissors!`);
