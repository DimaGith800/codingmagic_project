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

function isResponseError(message) {
    response.textContent = message;
    response.style.color = '#990000';
}

function resetOperationChoice() {
    response.textContent = '';
    operators.forEach(operator => operator.style.backgroundColor = '');
}

function calculate(a, b, operator) {
    if (isNaN(a) || isNaN(b)) {
        isResponseError('Введіть обидва числа!');
        return;
    }
    result.value = '';
    response.textContent = '';
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
            if (b == 0) {
                isResponseError('На нуль ділити не можна!');
                break;
            }
            else {
                isResponseSuccess();
                result.value = a / b;
                break;
            }
    }
}

function onOperatorClick(evt) {
    const firstNumber = parseFloat(firstInput.value); 
    const secondNumber = parseFloat(secondInput.value);

    operators.forEach((operator) => operator.style.backgroundColor = '');
    const clickedOperator = evt.currentTarget;

    switch (clickedOperator) {
        case operatorMinus: 
            calculate(firstNumber, secondNumber, '-');
            break;
        case operatorPlus: 
            calculate(firstNumber, secondNumber, '+');
            break;
        case operatorDivide: 
            calculate(firstNumber, secondNumber, '/');
            break;
        case operatorMultiply: 
            calculate(firstNumber, secondNumber, '*');
            break;
        default:
            console.log('What?');
            break;
    }
    clickedOperator.style.backgroundColor = 'grey';
    clickedOperator.style.transition = '0.3s ease';
}   

function initCalculator() {
    operators.forEach(operator => {
        operator.addEventListener('click', (evt) => {
            onOperatorClick(evt);
            calculateButton.dataset.currentOperator = evt.currentTarget.id;
        });
    });

    inputs.forEach(input => input.addEventListener('input', resetOperationChoice));
}


export {initCalculator};