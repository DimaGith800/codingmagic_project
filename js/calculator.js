//game 4: CALCULATOR

const firstInput = document.querySelector('#input-firstnumber');
const secondInput = document.querySelector('#input-secondnumber');
const operatorMinus = document.querySelector('#operator-minus');
const operatorPlus = document.querySelector('#operator-plus');
const operatorMultiply = document.querySelector('#operator-multiply');
const operatorDivide = document.querySelector('#operator-division');
const calculateButton = document.querySelector('#button-calculate');
const result = document.querySelector('#calculator-result');
const response = document.querySelector('#calculator-response')

const inputs = [firstInput, secondInput];
const operators = [operatorMinus, operatorPlus, operatorMultiply, operatorDivide];

function isResponseSuccess(message = 'Успішно!') {
    response.textContent = message;
    response.style.color = '#039900';
}

function isResponseError(message = 'Помилка!') {
    response.textContent = message;
    response.style.color = '#990000';
}


function resetOperationChoice() {
    if (firstInput.value === '' && secondInput.value === '') {
        operators.forEach(operator => operator.style.backgroundColor = '');
        calculateButton.dataset.currentOperator = '';
        response.textContent = '';
    }
}

function calculate(a, b, operator) {
    if (isNaN(a) || isNaN(b)) {
        isResponseError('Недопустимий формат!');
        return;
    }
    if (!operator) {
        isResponseError('Оберіть операцію!');
        return;
    }

    result.value = '';
    operators.forEach(op => op.style.backgroundColor = '');

    switch (operator) {
        case '+':
            isResponseSuccess();
            result.value = a + b;
            break;
        case '-':
            isResponseSuccess();
            result.value = a - b;
            break;
        case '*': 
            isResponseSuccess();
            result.value = a * b;
            break;
        case '/':
            if (b === 0) {
                isResponseError('На нуль ділити не можна!');
            } else {
                isResponseSuccess();
                result.value = a / b;
            }
            break;
    }
    calculateButton.dataset.currentOperator = '';
}

function onOperatorClick(evt) {
    operators.forEach((operator) => operator.style.backgroundColor = '');
    const clickedOperator = evt.currentTarget;

    clickedOperator.style.backgroundColor = 'grey';
    clickedOperator.style.transition = '0.3s ease';
    switch (clickedOperator) {
        case operatorMinus: 
            return '-';
        case operatorPlus: 
            return '+';
        case operatorDivide: 
            return '/';
        case operatorMultiply: 
            return '*';
        default:
            console.log('What?');
            break;
    }
}

function onEqualsClick(evt) {
    const firstNumber = parseFloat(firstInput.value);
    const secondNumber = parseFloat(secondInput.value);
    const currentOperator = calculateButton.dataset.currentOperator;

    if (firstInput.value === '' || secondInput.value === '') {
        isResponseError('Заповніть обидва поля!');
        return;
    }

    calculate(firstNumber, secondNumber, currentOperator);
}

function initCalculator() {
    operators.forEach(operator => {
        operator.addEventListener('click', (evt) => {
            const symbol = onOperatorClick(evt);
            calculateButton.dataset.currentOperator = symbol;
        });
    });
    
    calculateButton.addEventListener('click', onEqualsClick);
    inputs.forEach(input => input.addEventListener('input', resetOperationChoice));
}


export {initCalculator};