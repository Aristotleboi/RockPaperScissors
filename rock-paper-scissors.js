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
    let winCondition;
    //9 comparisons for each outcome of rock paper scissors
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        winCondition = 2;
        message = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') {
        winCondition = 1;
        message = 'Draw';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        winCondition = 0;
        message = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        winCondition = 2;
        message = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors') {
        winCondition = 1;
        message = 'Draw';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        winCondition = 0;
        message = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        winCondition = 2;
        message = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper') {
        winCondition = 1;
        message = 'Draw';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        winCondition = 0;
        message = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }
    roundMessage = message;
    return winCondition;
}


// a function to keep score over 5 rounds
function game() {
    let winState = playRound(playerSelection, computerSelection);
    if (winState === 2) {
        playerScore = playerScore + 1;
        return;
    } else if (winState === 1) {
        console.log("draw");
    } else if (winState === 0) {
        computerScore = computerScore + 1;
        return;
    }
}

const scores = document.querySelector('.scores');
const player = document.createElement('div');
player.classList.add('player');
player.textContent = 'Players Score: ' + playerScore;
scores.appendChild(player);
const computer = document.createElement('div');
computer.classList.add('computer');
computer.textContent = 'Computer Score: ' + computerScore;
scores.appendChild(computer);
const gameMessages = document.querySelector('.message');
const messageGame = document.createElement('div');
messageGame.classList.add('messageGame');
messageGame.textContent = 'Please Select One';
gameMessages.appendChild(messageGame);



// player selects one of threee buttons and a round is playes
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    game();
    player.textContent = 'Players Score: ' + playerScore;
    computer.textContent = 'Computers score: ' + computerScore;
    messageGame.textContent = roundMessage;
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    game();
    player.textContent = 'Players Score: ' + playerScore;
    computer.textContent = 'Computers score: ' + computerScore;
    messageGame.textContent = roundMessage;
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    game();
    player.textContent = 'Players Score: ' + playerScore;
    computer.textContent = 'Computers score: ' + computerScore;
    messageGame.textContent = roundMessage;
});

if (playerScore >= 5) {
    console.log('player score reached 5');
}
if (computerScore >= 5) {
    messageGame.textContent = 'Sorry You Lose!';
}