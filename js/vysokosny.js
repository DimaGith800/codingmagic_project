//game 1: YEAR OF BIRTH IS OR ISN'T LEAP
const input = document.querySelector('.main_container--content--game--input--itself');
const submitButton = document.querySelector('.main_container--content--game--input--button');
const response = document.querySelector('.main_container--content--game--response');

function onInputSubmit() {
    const value = input.value.trim();
    const year = Number(value);

    if (value === '' || isNaN(year)) {
        response.textContent = 'Введене значення не є числом!';
        response.style.color = '#990000';
        return;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        response.textContent = 'Ви народилися у високосний рік!';
        response.style.color = '#039900';
    } 
    else if (year > 2026) {
        response.textContent = 'Ви ще не народилися!';
        response.style.color = '#990000';
    }
    else {
        response.textContent = 'Ви народилися не у високосний рік!';
        response.style.color = '#990000';
    }
}

function isLeapYear() {
    submitButton.addEventListener('click', onInputSubmit);
}

export {isLeapYear};