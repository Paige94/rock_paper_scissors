// Get random computer chocie of rock, paper or scissors
function getComputerChoice () {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else if (randomNumber === 3) {
        return "scisscors";
    }
}

// Get player's choice of rock, paper or scissors
function getPlayerChoice () {
    let playerChoice = prompt("Let's play! Choose rock, paper or scissors");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

// Play one round of the game: computer vs player




console.log(getPlayerChoice());