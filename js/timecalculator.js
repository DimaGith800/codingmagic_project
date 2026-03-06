const input = document.querySelector('#time_input');
const submit = document.querySelector('#time_submit');
const result = document.querySelector('#time_result');
const response = document.querySelector('#time_response')

function isResponseSuccess(message = 'Успішно!') {
    response.textContent = message;
    response.style.color = '#039900';
}

function isResponseError(message = 'Помилка!') {
    response.textContent = message;
    response.style.color = '#990000';
}


function calculateTime() {
    let totalMinutes = parseFloat(input.value);

    if (isNaN(totalMinutes) || totalMinutes < 0) {
        isResponseError(isNaN(totalMinutes) ? 'Введіть число!' : 'Введіть кількість хвилин!');
        return;
    }

    let totalSeconds = Math.round(totalMinutes * 60);

    const days = Math.floor(totalSeconds / (24 * 3600));
    totalSeconds %= (24 * 3600);

    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    isResponseSuccess();
    result.textContent = `${days} дн. ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function initTimeCalculator() {
    submit.addEventListener('click', calculateTime);
}

export {initTimeCalculator}