let a = 0
let b = 0

function dotest() {
    console.log("submit")
    console.log("test")
    a = document.getElementById("fnum").value
    b = document.getElementById("snum").value

    let mul = a * b
    let div = a / b
    let rem = a % b
    if (a < b) {
        rem = b
    }
    document.body.innerHTML += "<br>" + "Product:" + mul + "<br>" + "Quotient:" + parseInt(div) + "<br>" + "Remainder:" + rem
}
