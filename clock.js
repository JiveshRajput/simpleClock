const showClock = document.getElementById("clock");
const showDate = document.getElementById("date");
const showDay = document.getElementById("day");
// present time clock
setInterval(() => {
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let meridian = hr <= 12 ? "am" : "pm";
    hr = hr >= 12 ? hr - 12 : hr;
    hr = hr == 0 ? 12 : hr;
    min = min >= 10 ? min : "0" + min;
    sec = sec >= 10 ? sec : "0" + sec;
    let perfectTime = (`${hr}:${min}:${sec} ${meridian}`);
    showClock.innerHTML = perfectTime;
}, 1000);
// Date Setup
let date = new Date();
let dt = date.getDate();
let mn = date.getMonth();
let yr = date.getFullYear();
switch (mn) {
    case 0: mn = "January";
        break;
    case 1: mn = "February";
        break;
    case 2: mn = "March";
        break;
    case 3: mn = "April";
        break;
    case 4: mn = "May";
        break;
    case 5: mn = "June";
        break;
    case 6: mn = "July";
        break;
    case 7: mn = "August";
        break;
    case 8: mn = "September";
        break;
    case 9: mn = "October";
        break;
    case 10: mn = "November";
        break;
    case 11: mn = "December";
        break;
}
const dateFormat = `${dt}, ${mn}, ${yr}`;
showDate.innerHTML = dateFormat;
// Day Setup
let presentDay = date.getDay();
switch (presentDay) {
    case 1: showDay.innerHTML = "Monday";
        break;
    case 2: showDay.innerHTML = "Tuesday";
        break;
    case 3: showDay.innerText = "Wednesday";
        break;
    case 4: showDay.innerHTML = "Thursday";
        break;
    case 5: showDay.innerHTML = "Friday";
        break;
    case 6: showDay.innerHTML = "Saturday";
        break;
    case 7: showDay.innerHTML = "Sunday";
        break;
    default: showDay.innerHTML = "unknown";
        break;
}
