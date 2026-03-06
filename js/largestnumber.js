const inputs = document.querySelectorAll('.main_container--game--largestnumber--inputs--input');
const result = document.querySelector('#largestnumber_result');
const response = document.querySelector('#largestnumber_response');
const resultMessage = document.querySelector('.main_container--game--largestnumber--result')

function isResponseError(message = 'Помилка!') {
    response.textContent = message;
    response.style.color = '#990000';
}

function searchLargestNumber() {
    const values = [];
    inputs.forEach((input) => {
        const val = parseFloat(input.value);
        if (!isNaN(val)) values.push(val);
    });

    if (values.length < inputs.length) {
        isResponseError('Введіть усі числа!');
        result.textContent = '';
        resultMessage.style.display = 'none';
        return;
    }
    const sortedValues = values.sort((a, b) => a - b);
    const largest = sortedValues[sortedValues.length - 1];

    resultMessage.style.display = 'block';
    result.textContent = largest;
    response.textContent = '';
}

export function initLargestNumberSearch() {
    inputs.forEach((input) => input.addEventListener('input', searchLargestNumber));
}