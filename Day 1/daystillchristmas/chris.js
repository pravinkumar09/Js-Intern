const date = new Date(/*'December 26, 2022 00:00:00'*/);
const noofdays = [30, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()]
let i = 0
daysleft = 0
if (month < 11) {
    daysleft = 25
    daysleft += (noofdays[i] - day)
    for (i = month + 1; i < 11; i++) {
        daysleft += noofdays[i]
    }
    if (year % 4 == 0 && year % 400 == 0 && year % 100 != 0) {
        daysleft += 1
    }
    document.body.innerText += daysleft


}
else if (month == 11 && day < 25) {
    daysleft = 25 - day
    if (year % 4 == 0 && year % 400 == 0 && year % 100 != 0) {
        daysleft += 1
    }
    document.body.innerText += daysleft
}
else {
    daysleft += 365
    daysleft += (noofdays[i] - day)
    for (i = month + 1; i < 11; i++) {
        daysleft += noofdays[i]
    }
    if (year % 4 == 0 && year % 400 == 0 && year % 100 != 0) {
        daysleft += 1
    }
    document.body.innerText += daysleft

}