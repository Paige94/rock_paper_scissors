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
        computerWins++;
        return "You lose! Rock beats scissors!";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        playerWins++;
        return "You win! Paper beats rock!";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerWins++;
        return "You lose! Paper beats rock!";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerWins++;
        return "You win! Scissors beat paper!";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerWins++;
        return "You win! Rock beats scissors!";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerWins++;
        return "You lose! Scissors beat paper!";
    } else if ((computerSelection === "rock" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "paper") || (computerSelection === "scissors" && playerSelection === "scissors")) {
        alert("It's a tie - you chose the same thing! Let's retry this round");
        return playRound(getComputerChoice(), getPlayerChoice());
    }
    }

// Play a set of 5 rounds
function game() {
    for (let i = 1; i < 6; i++) {
        console.log(playRound(getComputerChoice(), getPlayerChoice()));
        console.log(playerWins);
        console.log(computerWins);
        console.log(i);
    }
    // Let player know if they're the winner or loser, best of the 5 games played
    if (playerWins > computerWins) {
        alert(`End of game! You won ${playerWins} times and the computer won ${computerWins} times, so you won!`)
    } else if (playerWins < computerWins) {
        alert(`End of game! You won ${playerWins} times and the computer won ${computerWins} times, so you lost!`)
    }
}

// Initialise the 'no. rounds won' counters
let playerWins = 0;
let computerWins = 0;

// Run the game
game();