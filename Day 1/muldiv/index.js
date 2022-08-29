let a = prompt("Enter the first number")
let b = prompt("Enter the second number")
let mul = a * b
let div = a / b
let rem = a % b
if (a < b) {
    rem = b
}
document.body.innerHTML += "Product:" + mul + "<br>" + "Quotient:" + parseInt(div) + "<br>" + "Remainder:" + rem