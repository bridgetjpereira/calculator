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

// Create a calculator variable that's listening for anything in the calculator class
const calculator = document.querySelector(".calculator");
// Create a keys variable that's looking for anything with the class calculator_keys that's nested in the calculator class
const keys = calculator.querySelector(".calculator__keys");

// Create an event listener for a click action on anything with the class calculator_keys (variable we created earlier)
keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    // Do something
  }
});
