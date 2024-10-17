# Calculator Project Spoilers

This file contains more detailed hints and code snippets for the Calculator project. Only refer to these if you're stuck after attempting to solve the problems on your own.

## 1. HTML Structure

Here's a basic HTML structure you can use as a starting point:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="calculator">
        <div class="display">0</div>
        <button class="clear">C</button>
        <button class="number">7</button>
        <button class="number">8</button>
        <button class="number">9</button>
        <button class="operator">/</button>
        <button class="number">4</button>
        <button class="number">5</button>
        <button class="number">6</button>
        <button class="operator">*</button>
        <button class="number">1</button>
        <button class="number">2</button>
        <button class="number">3</button>
        <button class="operator">-</button>
        <button class="number">0</button>
        <button class="decimal">.</button>
        <button class="equals">=</button>
        <button class="operator">+</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## 2. CSS Styling

Here's a basic CSS structure to get you started:

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
}

.calculator {
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.display {
    grid-column: 1 / -1;
    background-color: #fff;
    padding: 10px;
    text-align: right;
    font-size: 24px;
    margin-bottom: 10px;
}

button {
    padding: 10px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.number, .decimal {
    background-color: #fff;
}

.operator, .equals {
    background-color: #f8a;
}

.clear {
    background-color: #faa;
}
```

## 3. Basic Functionality

Here's a starting point for the JavaScript:

```javascript
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const decimalButton = document.querySelector('.decimal');

let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

function inputDigit(digit) {
    if (waitingForSecondOperand) {
        display.textContent = digit;
        waitingForSecondOperand = false;
    } else {
        display.textContent = display.textContent === '0' ? digit : display.textContent + digit;
    }
}

function inputDecimal() {
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
}

function handleOperator(nextOperator) {
    const inputValue = parseFloat(display.textContent);

    if (operator && waitingForSecondOperand) {
        operator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation[operator](firstOperand, inputValue);
        display.textContent = String(result);
        firstOperand = result;
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

// Add event listeners here
```

## 4. Calculation Logic

The `performCalculation` object in the previous snippet shows how to implement basic calculations. To handle the equals button:

```javascript
equalsButton.addEventListener('click', () => {
    if (!waitingForSecondOperand) {
        const inputValue = parseFloat(display.textContent);
        if (operator && firstOperand !== null) {
            const result = performCalculation[operator](firstOperand, inputValue);
            display.textContent = String(result);
            firstOperand = result;
            operator = null;
        }
    }
});
```

## 5. Clear Functionality

Implement the clear functionality like this:

```javascript
function resetCalculator() {
    display.textContent = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
}

clearButton.addEventListener('click', resetCalculator);
```

## 6. Decimal Point Functionality

The `inputDecimal` function in the earlier JavaScript snippet shows how to handle decimal input. Make sure to add an event listener:

```javascript
decimalButton.addEventListener('click', inputDecimal);
```

## Bonus Features

1. Keyboard support:
   Add an event listener to the `window` object for the 'keydown' event. Map keyboard keys to calculator functions.

2. Additional operations:
   Add new buttons to the HTML, style them in CSS, and implement their logic in JavaScript.

3. Calculation history:
   Create an array to store past calculations. Display this array in a separate div in the HTML.

4. Complex expressions:
   This requires implementing a more sophisticated parsing algorithm. Consider using the Shunting Yard algorithm or a recursive descent parser.

Remember, these are just hints. Try to implement the features on your own before looking at these spoilers. Good luck!