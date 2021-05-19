/*let addNumbers (a, b) {
    return a + b;
}
let addTotal = addNumbers

console.log (addNumbers)




let subtractNumbers (a, b) {
    return a - b;
}

let subtractTotal = subtractNumbers
console.log (subtractNumbers)


let multiplyNumbers (a, b){
    return a * b;
}
let multiplyTotal = multiplyNumbers
console.log (multiplyNumbers)


let divideNumbers (a, b){
    return a / b;
}
let divideTotal = divideNumbers
console.log (divideNumbers)
*/

//How do we use a calculator?

//1. 0 default display
//2. We click on a number 1-9
//3.Following the click, a number will appear on the screen.
//4. We will then multiply, divide, add, substract from, another number
//5. We input equals
//6. A result appears on the screen.

//JS.
///Make 0 default display.
//Click on one number.
//Number appears on screen.

/*
// Create a calculator variable which grabs any HTML with class of calculator.
const calculator = document.querySelector(".calculator");
// Create a keys variable that's looking for anything with the class calculator_keys that's nested in the calculator class
const keys = calculator.querySelector(".calculator__keys");

// Create an event listener for a click action on anything with the class calculator_keys (variable we created earlier)
keys.addEventListener("click", (e) => {
  // If something in our event listener matches a html button, we should do something
  if (e.target.matches("button")) {
    // Create a variable key which represents the key that has been clicked.
    const key = e.target;
    // Get the id of yhe button pressed
    const buttonPressed = key.id;

    //to get console.log response from every calculator key! However, individual ids are not recognised at this stage- just differentiates between
    //number key and operator key!

    if (buttonPressed === "") {
      console.log("number key!");
    }
    if (
      buttonPressed === "add" ||
      buttonPressed === "subtract" ||
      buttonPressed === "multiply" ||
      buttonPressed === "divide"
    ) {
      key.classList.add("is-depressed");
      calculator.id.previousKeyType = "operator";
      console.log("operator key!");
    }

    if (buttonPressed === "decimal") {
      console.log("decimal key!");
    }

    if (buttonPressed === "clear") {
      console.log("clear key!");
    }
    if (buttonPressed === "calculate") {
      console.log("equals key!");
    }
  }
});

// Next need to know the number of the key that was clicked and the current displayed number.

const display = document.querySelector(".calculator__display");
//Declare variable display equal to 'getting' anything with class calculator__display.

keys.addEventListener("click", (e) => {
  // Added event listener to anything with the class of keys.

  if (e.target.matches("button")) {
    //if statement: if the event target matches the element button-
    //declare a variable of key equal to event target, a variable of action equal to.... a variable fo keyContent...NO IDEA WHAT THIS MEANS!!
    const key = e.target;

    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );
    const buttonPressed = key.id.buttonPressed;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
  }
});

if (buttonPressed === " ") {
  if (displayedNum === "0") {
    display.textContent = keyContent;
  } else {
    display.textContent = displayedNum + keyContent;
  }
}

if (buttonPressed === "decimal") {
  display.textContent = displayedNum + ".";
}
/*




NEW TEST!

*/

// 1. Start by creating an object called calculator. Individual properties
//do not interact with each other! Declared within object so you have
//somewhere to store them when you change them. Default values.
//Default display is 0. etc.

const calculator = {
  displayValue: 0,
  firstNumber: null,
  waitingForSecondNumber: false,
  operator: null,
};

//2. We need the '0' which is displayValue property to appear on the
//screen at all times. Need to make a function to update the screen
//display with the contents of displayValue.

inputDigit = (digit) => {
  // Create variable displayValue = the displayValue of the calculator object
  const displayValue = calculator.displayValue;
  const waitingForSecondNumber = calculator.waitingForSecondNumber;
  // If the current display value is 0, replace it with the value of the button clicked
  if (waitingForSecondNumber === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondNumber = false;
  } else {
    if (displayValue === 0) {
      calculator.displayValue = digit;
    } else {
      calculator.displayValue = displayValue + digit;
    }
  }

  console.log(calculator);
};

inputDecimal = (point) => {
  if (calculator.waitingForSecondNumber === true) {
    calculator.displayValue = "0";
    calculator.waitingForSecondNumber = false;
    return;
  }
  //Scenario for when the displayValue property does not contain a decimal point
  if (!calculator.displayValue.includes(point)) {
    //Append the decimal point to display digits/operators
    calculator.displayValue += point;
  }
};

inputOperator = (nextOperator) => {
  const firstNumber = calculator.firstNumber;
  const displayValue = calculator.displayValue;
  const operator = calculator.operator;
  const inputValue = parseFloat(displayValue);

  if (firstNumber === null && !isNaN(inputValue)) {
    calculator.firstNumber = inputValue;
  } else if (operator) {
    console.log(firstNumber, inputValue, operator);
    const result = calculate(firstNumber, inputValue, operator);
    console.log(result);
    calculator.displayValue = String(result);
    calculator.firstNumber = result;
  }
  calculator.waitingForSecondNumber = true;
  calculator.operator = nextOperator;
  console.log(calculator);
};

calculate = (firstNumber, secondNumber, operator) => {
  console.log(operator);
  if (operator === "add") {
    return firstNumber + secondNumber;
  } else if (operator === "minus") {
    return firstNumber - secondNumber;
  } else if (operator === "multiply") {
    return firstNumber * secondNumber;
  } else if (operator === "divide") {
    return firstNumber / secondNumber;
  }
  return secondNumber;
};

resetCalculator = () => {
  calculator.displayValue = "0";
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
  calculator.operator = null;
  console.log(calculator);
};

updateDisplay = () => {
  //select the element with the class of 'calculator-screen'
  const display = document.querySelector(".calculator__screen");
  //update the value of the element with the contents of 'displayValue'
  display.innerHTML = calculator.displayValue;
};

//calling the function updateDisplay
updateDisplay();

//3. Pressing keys
//digits (0-9) operator (+,-,multply, divide, =), decimal point(.) and reset key (AC).
//Need to 'listen to' clicks on the calculator keys and determine which key was pressed!

const keys = document.querySelector(".calculator__keys");
keys.addEventListener("click", (event) => {
  //Whenever the keys are clicked, they must meet the conditions
  //below.

  const target = event.target;
  //Creating a variable called target which is equal to the target of the
  //event.

  if (!target.matches("button")) {
    return;
  }
  //Check if the clicked element is a button,
  //If not a button, leave function.
  if (target.classList.contains("key--operator")) {
    inputOperator(target.value);
    updateDisplay();
    return;
    //return exits a function, doesn't go onto next if
    //statement.
  }

  //If button has a class of key--operator, print operator and
  //value of target button to the console.

  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  //inputDecimal function- includes() method is used to check
  //if displayValue does not already contain a decimal point.

  if (target.classList.contains("clear")) {
    resetCalculator();
    updateDisplay();
    return;
  }

  if (target.classList.contains("key--equal")) {
    inputOperator(target.value);
    updateDisplay();
    return;
  }
  //target variable represents the object that was clicked. If element is
  //not a button, function is exited.

  inputDigit(target.value);
  updateDisplay();
}); //if you get to the end and it hasn't matched any other button, input number pressed.

//Decimal point

//When decimal point is clicked, needs to append to whatever is displayed on the screen, unless
//it already has a decimal point.

//Handling operators

//1. user hits an operator following entry of first number
