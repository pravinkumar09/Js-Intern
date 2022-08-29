let srt = prompt("Enter a String")
let len = srt.length
let final = ""
final += srt[0].toUpperCase()
for (let i = 1; i < len; i++) {
    console.log(i)
    if (srt.charAt(i) == " ") {
        final += " "
        final += srt.charAt(i + 1).toUpperCase()
        i += 1
    }
    else {
        final += srt.charAt(i)
    }
}
console.log(final)
