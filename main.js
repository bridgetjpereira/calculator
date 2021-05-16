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
    //if statement: if the event target marches the element button-
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
