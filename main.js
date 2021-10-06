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

// Create object Calculator with the following properties:
// displayValue = The number that appears on the calculator screen (Default 0)
// firstNumber = The first number inputted (Default null)
// waitingForSecondNumber = If this is true, we have typed in operator and are about to start inputting the second number, otherwise it's false   Boolean (Default false)
// operator = +-/*= (Default null)

const calculator = {
  displayValue: 0,
  firstNumber: null,
  waitingForSecondNumber: false,
  operator: null,
};

// Function inputDigit takes a paramter of digit
// This function adds a number to the display

inputDigit = (digit) => {
  // Creating a variable currentDisplayValue which is equal to the current displayValue property of calculator
  // This gets the current display value on the screen and puts it in a variable
  const currentDisplayValue = calculator.displayValue;
  // Creating a variable called waitingForSecondNumber which is equal to the current value of waitingForSecondNumber property of calculator
  // This lets us know whether we're inputting the first or second number into the calculator and sets it in a variable
  const currentWaitingForSecondNumber = calculator.waitingForSecondNumber;
  // If we have typed an operator key
  if (currentWaitingForSecondNumber === true) {
    // Overwrites the current number on the screen
    calculator.displayValue = digit;
    // Number typed, so no longer waiting for an second number
    calculator.waitingForSecondNumber = false;
  }
  // Not an operator typed so go here
  else {
    // If what's on screen is a 0
    if (currentDisplayValue === 0) {
      // Overwrites the current number on the screen
      calculator.displayValue = digit;
    } else {
      // Otherwise take the current display value and append the number clicked

      calculator.displayValue = currentDisplayValue + digit;
    }
  }
  // This just prints the calculator object
  console.log(calculator);
};

//Function to remove leading zero after hit AC button

// Function inputDecimal takes a paramater of point
// This is for when someone clicks on a decimal point
inputDecimal = (point) => {
  // Conditional statement within a function
  // If we've typed in an operator and we click the decimal point
  if (calculator.waitingForSecondNumber === true) {
    // We display the value 0.
    calculator.displayValue = "0.";
    // A number is now on screen, so no longer waiting for the second number
    calculator.waitingForSecondNumber = false;
    // exit
    return;
  }

  // If we have a 0 on screen, add a point and exit
  // This is only for the first load of the page after a refresh.
  if (calculator.displayValue === 0) {
    calculator.displayValue = "0.";
    return;
  }

  //Scenario for when the displayValue property does not contain a decimal point
  //This is to make sure we don't type 2 decimal points (numbers like this do not exist)
  if (!calculator.displayValue.includes(point)) {
    //Append the decimal point to display digits/operators
    calculator.displayValue += point;
  }
};

// Function inputOperator which takes a parameter operatorClicked
inputOperator = (operatorClicked) => {
  // Declare several variables
  // currentFirstNumber which is the current value of the calculator object firstNumber
  const currentFirstNumber = calculator.firstNumber;
  // This gets the current display value on the screen and puts it in a variable
  const currentDisplayValue = calculator.displayValue;
  // This gets if an operator is stored previously in the calculator object.
  const currentOperator = calculator.operator;
  // Converts the current display value to a floating point number (a number with decimal points even if they aren't shown)
  const inputValue = parseFloat(currentDisplayValue);

  // If the currentFirstNumber hasn't been set and inputValue isn't 0
  if (currentFirstNumber === null && !isNaN(inputValue)) {
    // set the firstNumber in the calculator object to the inputValue
    calculator.firstNumber = inputValue;
    // if the current operator is not null
  } else if (currentOperator) {
    // Print out currentFirstNumber, inputValue and currentOperator to the console
    console.log(currentFirstNumber, inputValue, currentOperator);
    // Declaring a variable result setting it equal to the result of the function calculate.
    // We give the function calculate the variables currentFirstNumber, inputValue and currentOperator
    const result = calculate(currentFirstNumber, inputValue, currentOperator);
    // Print out the result to the console
    console.log(result);
    // Updating the display to the result
    calculator.displayValue = result;
    // Updating the firstNumber to the result
    calculator.firstNumber = result;
  }
  // Tell the object we've clicked an operator
  calculator.waitingForSecondNumber = true;
  // Tell the object which operator we've clicked
  calculator.operator = operatorClicked;
  // Print out the calculator object
  console.log(calculator);
};

// A function to do maths on the numbers we've input
calculate = (firstNumber, secondNumber, operator) => {
  // Print out which operator we've clicked (what type of maths we'll do)
  console.log(operator);
  // If we've clicked the plus button return the result of adding the 2 numbers
  if (operator === "add") {
    return firstNumber + secondNumber;
    // If we've clicked the minus button return the result of subracting the second number from the first one
  } else if (operator === "minus") {
    return firstNumber - secondNumber;
    // If we've clicked the multiply button return the result of multiplying the 2 numbers
  } else if (operator === "multiply") {
    return firstNumber * secondNumber;
    // If we've clicked the divide button return the result of dividing the 2 numbers
  } else if (operator === "divide") {
    return firstNumber / secondNumber;
  }
  // If the operator doesn't match any of these just return the 2nd number
  return secondNumber;
};

// Function to reset calculator back to the start
// Resets the calculator object back to it's default values
resetCalculator = () => {
  calculator.displayValue = 0;
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
  calculator.operator = null;
  console.log(calculator);
};

// Function to update the calculator display
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

// if (target.classList.contains("clear") && calculator.firstNumber == true) {
//   display.innerHTML = calculator.displayValue = parseInt(firstNumber, 10);
// }
