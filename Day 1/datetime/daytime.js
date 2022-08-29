let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
let dateradio = prompt('0. 12 hrs format \n 1. 24hrs format \nAnyother value defaults to 24hrs format');
const date = new Date()
let day = date.getDay()
let hours = date.getHours(); let minutes = date.getMinutes(); let seconds = date.getSeconds();
if (minutes < 10) {
    minutes = "0" + minutes
}
if (seconds < 10) {
    seconds = "0" + seconds
}
if (dateradio == 0) {
    if (hours < 12) {
        document.body.innerText = days[day] + " | " + hours + " AM" + " : " + minutes + " : " + seconds
    }
    else {
        if ((hours = hours % 12) < 10) {
            hours = "0" + hours
        }
        document.body.innerText = days[day] + " | " + (hours) + " PM" + " : " + minutes + " : " + seconds
    }
}
else {
    document.body.innerText = days[day] + " | " + hours + " : " + minutes + " : " + seconds
}