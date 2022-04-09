const dateTarget = new Date('04/13/2022 6:00 AM');
const remainingTime = document.querySelector('#remainingTime');
const milisecondsOfASecond = 1000;
const milisecondsOfAMinute = milisecondsOfASecond * 60;
const milisecondsOfAHour = milisecondsOfAMinute * 60;
const milisecondsOfADay = milisecondsOfAHour * 24;
const fireworks = document.querySelector('#fireworks');
const colors = [
   '#d39af3'
];

function changeBackground(color) {
    document.body.style.background = color;
}

function hideCounter() {
    remainingTime.textContent = 'Disfruta tu vuelo, al rato te veo';
}

function launchFireworks() {
    fireworks.style.display = 'initial';
    hideCounter();
}

function updateCountdown() {
    const now = new Date();
    const duration = dateTarget - now;
    const remainingsDays = Math.floor(duration / milisecondsOfADay);
    const remainingsHours = Math.floor((duration % milisecondsOfADay) / milisecondsOfAHour);
    const remainingMinutes = Math.floor((duration % milisecondsOfAHour) / milisecondsOfAMinute);
    const remainingSeconds = Math.floor((duration % milisecondsOfAMinute) / milisecondsOfASecond);
    const remainingNumber = remainingsDays.toString() +  remainingsHours.toString() + remainingMinutes.toString() + remainingSeconds.toString();

    remainingTime.textContent = `${remainingsDays} dias, ${remainingsHours} : ${remainingMinutes} : ${remainingSeconds}`

    const remainingNumberParsed = parseInt(remainingNumber);
    if(remainingNumberParsed <= 0) {
        launchFireworks();
    }
    changeBackground(colors[0]);
}

updateCountdown();

setInterval(updateCountdown, milisecondsOfASecond);