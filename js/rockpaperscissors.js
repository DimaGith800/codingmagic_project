//game 3: ROCK PAPER SCISSORS
import { getRandomInteger } from "./main.js";

const rock = document.querySelector('#rps-rock');
const paper = document.querySelector('#rps-paper');
const scissors = document.querySelector('#rps-scissors');
const response = document.querySelector('#rps-response');
const userScore = document.querySelector('#rps-user-score');
const computerScore = document.querySelector('#rps-computer-score');
const revealComputersPick = document.querySelector('#rps-computerspick');
const possiblePlays = [rock, paper, scissors];

const RESPONSES = {
    playerWin: 'Ви виграли раунд!',
    computerWin: 'Комп’ютер виграв раунд!',
    tie: 'Ніхто не виграв раунд!'
}

const COMPUTER_CHOICES = {
    rock: "Камінь",
    paper: "Папір",
    scissors: "Ножиці"
}

let userChoice = null;

function getUserChoice(evt) {
    const clickedElement = evt.currentTarget;
    const isAlreadySelected = clickedElement.style.backgroundColor === 'grey';
    possiblePlays.forEach(el => el.style.backgroundColor = '');
    userChoice = null;
    if (!isAlreadySelected) {
        if (clickedElement === rock) userChoice = 'rock';
        else if (clickedElement === paper) userChoice = 'paper';
        else if (clickedElement === scissors) userChoice = 'scissors';

        clickedElement.style.transition = '0.3s ease';
        clickedElement.style.backgroundColor = 'grey';
    }
}

function getComputerChoice() {
    const number = getRandomInteger(1, 3);
    let computedChoice = null;

    switch (number) {
        case 1:
            computedChoice = 'rock';
            break;
        case 2:
            computedChoice = 'paper';
            break;
        case 3:
            computedChoice = 'scissors';
            break;
        default:
            console.log('What?');
    }
    return computedChoice;
}

function initRockPaperScissorsGameMechanics(userChoice, computerChoice) {
    if (!userChoice) return;
    response.textContent = '';

    revealComputersPick.textContent = `Комп'ютер обрав: ${COMPUTER_CHOICES[computerChoice]}`;

    if (userChoice == computerChoice) {
        response.textContent = RESPONSES.tie;
        response.style.color = '#990000';
    }
    else if ((userChoice == 'scissors' && computerChoice == 'paper')
        || (userChoice == 'paper' && computerChoice == 'rock')
        || (userChoice == 'rock' && computerChoice == 'scissors')) {
            response.textContent = RESPONSES.playerWin;
            response.style.color = '#039900';

            let currentScore = parseInt(userScore.textContent) || 0;
            userScore.textContent = currentScore + 1;
        }
    else {
        response.textContent = RESPONSES.computerWin;
        response.style.color = '#990000';

        let currentScore = parseInt(computerScore.textContent) || 0;
        computerScore.textContent = currentScore + 1;
    }
}

function startGame() {
    initRockPaperScissorsGameMechanics(userChoice, getComputerChoice());
}

possiblePlays.forEach((element) => {
    element.addEventListener('click', getUserChoice);
});

function initRpsGameStart() {
    revealComputersPick.addEventListener('click', startGame);
}

export {initRpsGameStart};