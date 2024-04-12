let display = document.querySelector('input[name="display"]');
let firstNum = null;
let secondNum = null;
let currentOperator = null;

function displayNumber(number) {
    if (currentOperator === null) {
        firstNum = firstNum!== null? parseFloat(firstNum + '' + number) : number;
        display.value = firstNum;
    } else {
        secondNum = secondNum!== null? parseFloat(secondNum + '' + number) : number;
        display.value = secondNum;
    }
}


function displayOperator(operator) {
    if (operator === '%') {
        if (firstNum!== null && secondNum!== null) {
            switch(currentOperator) {
                case '+':
                    secondNum = parseFloat(firstNum) + (parseFloat(firstNum) * (parseFloat(secondNum) / 100));
                    break;
                case '-':
                    secondNum = parseFloat(firstNum) - (parseFloat(firstNum) * (parseFloat(secondNum) / 100));
                    break;
                case '*':
                    secondNum = parseFloat(firstNum) * (parseFloat(secondNum) / 100);
                    break;
                case '/':
                    secondNum = parseFloat(firstNum) / (parseFloat(secondNum) / 100);
                    break;
            }
            display.value = secondNum;
            firstNum = null;
        } else if (firstNum!== null) {
            firstNum = parseFloat(firstNum) / 100;
            display.value = firstNum;
        }
    } else {
        if (firstNum!== null && secondNum!== null) {
            switch(currentOperator) {
                case '+':
                    firstNum = parseFloat(firstNum) + parseFloat(secondNum);
                    break;
                case '-':
                    firstNum = parseFloat(firstNum) - parseFloat(secondNum);
                    break;
                case '*':
                    firstNum = parseFloat(firstNum) * parseFloat(secondNum);
                    break;
                case '/':
                    firstNum = parseFloat(firstNum) / parseFloat(secondNum);
                    break;
            }
            display.value = firstNum;
            secondNum = null;
        }
        currentOperator = operator;
    }
}

function displayResult() {
    if (firstNum!== null && secondNum!== null && currentOperator!== null) {
        let result = eval(firstNum + currentOperator + secondNum);
        display.value = result;
        firstNum = result;
        secondNum = null;
        currentOperator = null;
    }
}

function clearDisplay() {
    firstNum = null;
    secondNum = null;
    currentOperator = null;
    display.value = '0';
}

function toggleSign() {
    if (firstNum!== null) {
        firstNum = -firstNum;
        display.value = firstNum;
    } else if (secondNum!== null) {
        secondNum = -secondNum;
        display.value = secondNum;
    }
    if (firstNum!== null && secondNum!== null) {
        displayResult();
    }
}

function displayDecimal() {
    if (currentOperator === null) {
        firstNum = firstNum!== null? firstNum + '.' : '0.';
        display.value = firstNum;
    } else {
        secondNum = secondNum!== null? secondNum + '.' : '0.';
        display.value = secondNum;
    }
}

function displayPercentage() {
    if (firstNum!== null) {
        firstNum = firstNum * 0.01;
        display.value = firstNum;
    }
}