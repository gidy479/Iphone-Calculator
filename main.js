
let calculation = document.getElementById('calculation');
let result = document.getElementById('result');

function input(value) {
    calculation.innerText += value;
}

function clearOutput() {
    calculation.innerText = '';
    result.innerText = '0';
}

function toggleSign() {
    if (calculation.innerText !== '') {
        let currentValue = parseFloat(calculation.innerText);
        currentValue = -currentValue;
        calculation.innerText = currentValue.toString();
    }
}

function calculate() {
    try {
        let evaluatedResult = eval(calculation.innerText);
        result.innerText = evaluatedResult;
    } catch (error) {
        result.innerText = 'Error';
    }
}
