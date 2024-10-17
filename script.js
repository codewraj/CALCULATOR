let currentInput = '';
let operation = '';
let previousInput = '';

function appendToResult(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
    document.getElementById('result').style.color = 'black'; // Reset color to black
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(curr)) return;

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if (curr === 0) {
                document.getElementById('result').value = 'ERROR';
                document.getElementById('result').style.color = 'red'; // Set text color to red
                return; // Return without clearing previousInput and operation
            }
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = '';
    previousInput = '';
    document.getElementById('result').value = currentInput;
    document.getElementById('result').style.color = 'black'; // Reset color to black after calculation
}

function clearResult() {
    currentInput = '';
    previousInput = '';
    operation = '';
    document.getElementById('result').value = '';
    document.getElementById('result').style.color = 'black'; // Reset color to black
}
