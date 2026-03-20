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

function isResponseSuccess(message = 'Успішно!') {
    response.textContent = message;
    response.style.color = '#039900';
}

function isResponseError(message = 'Помилка!') {
    response.textContent = message;
    response.style.color = '#990000';
}


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

function initRockPaperScissorsGameMechanics(uChoice, computerChoice) {
    revealComputersPick.textContent = `Комп'ютер обрав: ${COMPUTER_CHOICES[computerChoice]}`;
    if (uChoice == computerChoice) {
        isResponseError(RESPONSES.tie);
    } 
    else if (
        (uChoice === 'scissors' && computerChoice === 'paper') ||
        (uChoice === 'paper' && computerChoice === 'rock') ||
        (uChoice === 'rock' && computerChoice === 'scissors')
    ) {
        isResponseSuccess(RESPONSES.playerWin);
        userScore.textContent = (parseInt(userScore.textContent) || 0) + 1;
    } 
    else {
        isResponseError(RESPONSES.computerWin);
        computerScore.textContent = (parseInt(computerScore.textContent) || 0) + 1;
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