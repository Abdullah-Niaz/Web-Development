let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput !== '') {
    if (currentOperator !== '') {
      calculate();
    }
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
  }
}

function calculate() {
  if (currentInput !== '' && previousInput !== '') {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    switch (currentOperator) {
      case '+':
        currentInput = (num1 + num2).toString();
        break;
      case '-':
        currentInput = (num1 - num2).toString();
        break;
      case '*':
        currentInput = (num1 * num2).toString();
        break;
      case '/':
        currentInput = (num1 / num2).toString();
        break;
    }
    previousInput = '';
    currentOperator = '';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  currentOperator = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = currentInput || '0';
}
