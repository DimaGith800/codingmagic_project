//game 1: YEAR OF BIRTH IS OR ISN'T LEAP
const input = document.querySelector('#leapyear_input');
const submitButton = document.querySelector('#leapyear_submit');
const response = document.querySelector('#leapyear_response');

function isResponseSuccess(message = 'Успішно!') {
    response.textContent = message;
    response.style.color = '#039900';
}

function isResponseError(message = 'Помилка!') {
    response.textContent = message;
    response.style.color = '#990000';
}


function onInputSubmit() {
    const value = input.value.trim();
    const year = Number(value);

    if (value === '' || isNaN(year)) {
        isResponseError('Введене значення не є числом!')
        return;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isResponseSuccess('Ви народилися у високосний рік!')
    } 
    else if (year > 2026) {
        isResponseError('Ви ще не народилися!')
    }
    else {
        isResponseError('Ви народилися не у високосний рік!')
    }
}

function isLeapYear() {
    submitButton.addEventListener('click', onInputSubmit);
}

export {isLeapYear};