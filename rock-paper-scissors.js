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

let computerSelection = computerPlay();
let playerSelection = 'rock'
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    let message;
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        message = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        message = 'Draw'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        message = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        message = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        message = 'Draw';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        message = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        message = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        message = 'Draw';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        message = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }

    return message
}

console.log(playRound(playerSelection, computerSelection));