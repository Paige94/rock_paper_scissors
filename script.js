// Get random computer choice of rock, paper or scissors
function getComputerChoice () {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else if (randomNumber === 3) {
        return "scissors";
    }
}

// Get player's choice of rock, paper or scissors
function getPlayerChoice () {
    let playerChoice = prompt("Let's play! Choose rock, paper or scissors");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

// Play one round of the game: computer vs player
function playRound(computerSelection, playerSelection) {
    if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose! Rock beats scissors!";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You win! Paper beats rock!";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You lose! Paper beats rock!";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You win! Scissors beat paper!";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You win! Rock beats scissors!";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You lose! Scissors beat paper!";
    } else if ((computerSelection === "rock" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "paper") || (computerSelection === "scissors" && playerSelection === "scissors")) {
        alert("It's a tie - you chose the same thing! Let's retry this round");
        return playRound(getComputerChoice(), getPlayerChoice());
    }
    }


console.log(playRound(getComputerChoice(), getPlayerChoice()));