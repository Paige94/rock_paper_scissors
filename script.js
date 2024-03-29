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
    } else if ((computerSelection === "rock" && playerSelection === "rock") 
                || (computerSelection === "paper" && playerSelection === "paper") 
                || (computerSelection === "scissors" && playerSelection === "scissors")) {
        return "It's a tie - you chose the same thing!";
    }
    }

// Initialise the 'no. rounds won' counters
let playerWins = 0;
let computerWins = 0;

// Run the game
const buttons = document.querySelectorAll('button');
const resultList = document.querySelector('#results');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

// Run game in response to button clicks
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const result = (playRound(getComputerChoice(), playerChoice));
        const showResult = document.createElement('p');
        showResult.textContent = result;

        playerScore.textContent = '😄 Player:';
        playerScore.textContent = `${playerScore.textContent} ${playerWins}`;

        computerScore.textContent = '🤖 Computer:';
        computerScore.textContent = `${computerScore.textContent} ${computerWins}`;

        computerScore.appendChild(showResult);

        if (playerWins === 5 || computerWins ===5) {
            const showFinalResult = document.createElement('p');
            showFinalResult.id = 'showFinalResult';

            if (playerWins > computerWins) {
                showFinalResult.textContent = "🎉 End of game! You won 🎉";
            } else if (playerWins < computerWins) {
                showFinalResult.textContent = "😭 End of game! You lost 😭";
            }
            computerScore.appendChild(showFinalResult);
        }
    })
})

