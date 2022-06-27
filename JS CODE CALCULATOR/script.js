//Function for addition
function add(number1, number2) {
    let sum = number1 + number2
    console.log(sum);
}
//Function for subtraction
function subtract(number1, number2) {
    let difference = number1 - number2
    console.log(difference)
}
//Function for multiplication
function multiply(number1, number2) {
    let product = number1 * number2
    console.log(product)
}
//Function for division
function divide(number1, number2) {
    let quotient = number1 / number2
    console.log(quotient)
}
let typeOfArithmeticOperations = prompt("What type of arithmetic operation are you using? " + "Example:  + =addition , - =subtraction , * =multiplication , / =division")
let inputNumberOne = Number(prompt("Enter the first number"))
let inputNumberTwo = Number(prompt("Enter the second number"))
switch (typeOfArithmeticOperations) {
    case "+":
        add(inputNumberOne, inputNumberTwo);
        break;
    case "-":
        subtract(inputNumberOne, inputNumberTwo)
        break
    case "*":
        multiply(inputNumberOne, inputNumberTwo)
        break;
    case "/":
        divide(inputNumberOne, inputNumberTwo)
        break;
    default: console.log("Input Error, Refresh Page")
}


