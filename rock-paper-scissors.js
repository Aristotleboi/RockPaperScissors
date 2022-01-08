//funtion to randomly have the CPU select rock,paper, or scissors
function computerPlay() {
    let selection;
    let computerNumber = Math.floor(Math.random()*3) + 1;
    if (computerNumber === 1) {
        selection = 'rock';
    } else if (computerNumber === 2) {
        selection = 'scissors';
    } else if (computerNumber === 3) {
        selection = 'paper';
    }
    return selection;
}


let computerSelection;
let playerSelection;
let roundMessage;
let playerScore = 0;
let computerScore = 0;


//playRound runs through one round of rock paper scissors and returns a message of win loss or draw
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    console.log(computerSelection);
    let message;
    playerSelection = prompt("Rock, Paper, Scissors");
    //9 comparisons for each outcome of rock paper scissors
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        message = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') {
        message = 'Draw';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        message = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        message = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors') {
        message = 'Draw';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        message = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        message = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper') {
        message = 'Draw';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        message = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }
    return message;
}

// a function to keep score over 5 rounds
function game() {
    let win = "Win";
    let lose = "Lose";
    let roundMessage = playRound();
    console.log(roundMessage);
    if (roundMessage.indexOf(win)) {
        console.log(roundMessage);
        console.log("Your Score " + playerScore + "  CPU score " + computerScore);
        return playerScore = playerScore + 1;
    } else if (roundMessage.indexOf(lose)) {
        console.log(roundMessage);
        console.log("Your Score " + playerScore + "  CPU score " + computerScore);
        return computerScore = computerScore + 1;
    } else {
        console.log("Draw");
        console.log("Your Score " + playerScore + "  CPU score " + computerScore);
        return "Draw"
    } 
    
    

}

console.log(game());
console.log(game());
console.log(game());
console.log(game());
console.log(game());
