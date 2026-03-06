//game 2: GUESS THE NUMBER

const input = document.querySelector('#gtn_input');
const submitButton = document.querySelector('#gtn_submit');
const response = document.querySelector('#gtn_response');

function isResponseSuccess(message = 'Успішно!') {
    response.textContent = message;
    response.style.color = '#039900';

}

function isResponseError(message = 'Помилка!') {
    response.textContent = message;
    response.style.color = '#990000';
}


function onGtnInputSubmit() {
    const number = Number(input.value);
    const computedNumber = Math.floor(Math.random() * 11);
    
    if (input.value.trim() === '' || isNaN(number)) {
        isResponseError('Введене значення не є числом!')
    }
    else if (number == computedNumber) {
        isResponseSuccess(`Вітаю, ви вгадали число! (${computedNumber})`)
    }
    else {
        isResponseError(`Ви програли, комп’ютер загадав ${computedNumber}`)
    }
}

function initGuessTheNumber() {
    submitButton.addEventListener('click', onGtnInputSubmit)
}

export {initGuessTheNumber};