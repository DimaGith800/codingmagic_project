//game 2: GUESS THE NUMBER

const input = document.querySelector('#gtn_input');
const submitButton = document.querySelector('#gtn_submit');
const response = document.querySelector('#gtn_response');

function onGtnInputSubmit() {
    const number = Number(input.value);
    const computedNumber = Math.floor(Math.random() * 11);
    
    if (input.value.trim() === '' || isNaN(number)) {
        response.textContent = 'Введене значення не є числом!';
        response.style.color = '#990000';   
    }
    else if (number == computedNumber) {
        response.textContent = `Вітаю, ви вгадали число! (${computedNumber})`;
        response.style.color = '#039900';
    }
    else {
        response.textContent = `Ви програли, комп’ютер загадав ${computedNumber}`;
        response.style.color = '#990000';  
    }
}

function initGuessTheNumber() {
    submitButton.addEventListener('click', onGtnInputSubmit)
}

export {initGuessTheNumber};