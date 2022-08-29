let str = "codingmart"
let len = str.length
let i = 0
function lol() {
    str = str[len - 1] + str.slice(0, len - 1)
    document.body.innerHTML += str + "<br>"
    if (i == len - 1) {
        clearInterval(intervalID)
    }
    i++
}
const intervalID = setInterval(lol, 1000)

