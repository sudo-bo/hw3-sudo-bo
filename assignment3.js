let currentState = 'init';
let operation = false;
let firstNumber = 0;
let secondNumber = 0;
let numberField = document.getElementById('input');

function resetOperationButton() {
    let btn = document.getElementsByClassName('button-active');

    if (btn.length > 0) {
        btn = btn[0];
        btn.classList.add('btn-light');
        btn.classList.remove('button-active');
    };
};

function onDoubleOperationClick(element) {
    switch (currentState) {
        case 'calculated':
            currentState = 'operation';
            firstNumber = numberField.innerText;
            operation = element.innerText;
            element.classList.remove('btn-light');
            element.classList.add('button-active');
            break;
        case 'inputNumberTwo':
            calculate();
        case 'inputNumberOne':
            currentState = 'operation';
            operation = element.innerText;
            element.classList.remove('btn-light');
            element.classList.add('button-active');
            break;
    };
};

function onSingleOperationClick(element) {
    calculate(element.innerText);
};

function onNumberClick(element) {
    let digit = element.innerText;
    switch (currentState) {
        case 'init':
            if (digit != 0) {
                currentState = 'inputNumberOne';
            };
            if (digit == '.') {
                numberField.innerText = numberField.innerText + digit;
            } else {
                numberField.innerText = digit;
            };
            break;
        case 'inputNumberOne':
        case 'inputNumberTwo':
            numberField.innerText = numberField.innerText + digit;
            break;
        case 'calculated':
            currentState = 'inputNumberOne';
            numberField.innerText = digit;
            break;
        case 'operation':
            currentState = 'inputNumberTwo';
            firstNumber = numberField.innerText;
            if (digit == '.') {
                numberField.innerText = 0 + digit;
            } else {
                numberField.innerText = digit;
            };
            resetOperationButton();
            break;
    };
};

function reset() {
    currentState = 'init';
    operation = false;
    firstNumber = 0;
    secondNumber = 0;
    numberField.innerText = 0;
    resetOperationButton();
};

function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    } else {
        return n;
    };
};

function calculate(op = operation) {
    if (currentState == 'calculated' || currentState == 'inputNumberOne') {
        firstNumber = numberField.innerText;
    } else {
        secondNumber = numberField.innerText;
    };

    switch (op) {
        case '+':
            numberField.innerText = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case 'x!':
            numberField.innerText = factorial(numberField.innerText);
            break;
        case '%':
            numberField.innerText = firstNumber / 100;
            break;
        case 'sin':
            numberField.innerText = Math.sin(firstNumber);
            break;
        case 'ln':
            numberField.innerText = Math.log(firstNumber);
            break;
        case '÷':
            numberField.innerText = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
        case 'cos':
            numberField.innerText = Math.cos(firstNumber);
            break;
        case 'log':
            numberField.innerText = Math.log(firstNumber) / Math.log(10);
            break;
        case '×':
            numberField.innerText = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case 'tan':
            numberField.innerText = Math.tan(firstNumber);
            break;
        case '√':
            numberField.innerText = Math.sqrt(firstNumber);
            break;
        case '-':
            numberField.innerText = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case 'EXP':
            numberField.innerText = Math.exp(firstNumber);
            break;
        case 'Xy':
            numberField.innerText = Math.pow(firstNumber, secondNumber);
            break;
    };
    currentState = 'calculated';
    resetOperationButton();
};
