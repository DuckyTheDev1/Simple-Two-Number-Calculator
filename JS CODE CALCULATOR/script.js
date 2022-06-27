//Function for addition
function add (number1, number2){
    let sum = number1 + number2
    console.log(sum);
    return sum
}
//Function for subtraction
function subtract (number1, number2){
    let difference = number1 - number2
    console.log(difference)
    return difference
}
//Function for multiplication
function multiply (number1, number2){
    let product = number1 * number2
    console.log(product)
    return product
}
//Function for division
function divide (number1, number2) {
    let quotient = number1 / number2
console.log (quotient)
return quotient
}
let typeOfArithmeticOperations = prompt ("What type of arithmetic operation are you using? " + "Example: Addition or addition, etc.");
let inputNumberOne = Number(prompt ("Enter the first number"))
let inputNumberTwo = Number(prompt ("Enter the second number"))
 switch (typeOfArithmeticOperations) {
    case "Addition" :
    case "addition" :
        add (inputNumberOne, inputNumberTwo);
        break;
        case "Subtraction":
        case "subtraction" :
            subtract (inputNumberOne,inputNumberTwo)
             break
            case "Multiplication" :
            case "multiplication" :
                multiply (inputNumberOne, inputNumberTwo)
                break;
                case "Division" : 
                case "division" :
                    divide (inputNumberOne, inputNumberTwo)
                    break;
                    default: console.log("Input Error, Refresh Page")
 }
 

