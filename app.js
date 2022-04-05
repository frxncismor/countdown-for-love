const dateTarget = new Date('04/13/2022 06:00 AM');
const remainingTime = document.querySelector('#remainingTime');
const milisecondsOfASecond = 1000;
const milisecondsOfAMinute = milisecondsOfASecond * 60;
const milisecondsOfAHour = milisecondsOfAMinute * 60;
const milisecondsOfADay = milisecondsOfAHour * 24;
const colors = [
   '#d39af3',
   '#d39af3',
   '#BC96E6',
   '#d39af3',
   '#d39af3',
   '#BC96E6',
   '#d39af3',
   '#d39af3',
   '#BC96E6',
   '#d39af3',
];

function changeBackground(color) {
    document.body.style.background = color;
}

function updateCountdown() {
    const now = new Date();
    const duration = dateTarget - now;
    const remainingsDays = Math.floor(duration / milisecondsOfADay);
    const remainingsHours = Math.floor((duration % milisecondsOfADay) / milisecondsOfAHour);
    const remainingMinutes = Math.floor((duration % milisecondsOfAHour) / milisecondsOfAMinute);
    const remainingSeconds = Math.floor((duration % milisecondsOfAMinute) / milisecondsOfASecond);

    remainingTime.textContent = `${remainingsDays} dias, ${remainingsHours} : ${remainingMinutes} : ${remainingSeconds}`

    const index = parseInt(remainingSeconds.toString().slice(-1))
    changeBackground(colors[index]);
}

updateCountdown();

setInterval(updateCountdown, milisecondsOfASecond);