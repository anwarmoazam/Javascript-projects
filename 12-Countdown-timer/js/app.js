const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 7, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 7, 30, 0);

console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = ("0"+`${futureDate.getDate()}`).slice(-2);
const weekday = weekdays[futureDate.getDay()];


// Giveaway Ends On Sunday, 24 April 2020, 8:00am
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;

// future time in milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    // 1 second = 1000 milliseconds
    // 1 minute = 60 seconds
    // 1 hour = 60 minutes
    // 1 day = 24 hour
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = Math.floor(t / oneDay);
    // days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    // hours = Math.floor(hours);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
    // set values array;
    const values = [days, hours, minutes, seconds];

    function format(item){
        if(item < 10){
            return item = `0${item}`;
        } 
        return item;
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    })

    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
    }
}

//countdown
let countdown = setInterval(getRemainingTime,1000); 
getRemainingTime();