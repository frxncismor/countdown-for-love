const dateTarget = new Date('04/13/2022 06:00 AM');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const milisecondsOfASecond = 1000;
const milisecondsOfAMinute = milisecondsOfASecond * 60;
const milisecondsOfAHour = milisecondsOfAMinute * 60;
const milisecondsOfADay = milisecondsOfAHour * 24;

function updateCountdown() {
    const now = new Date();
    const duration = dateTarget - now;
    const remainingsDays = Math.floor(duration / milisecondsOfADay);
    const remainingsHours = Math.floor((duration % milisecondsOfADay) / milisecondsOfAHour);
    const remainingMinutes = Math.floor((duration % milisecondsOfAHour) / milisecondsOfAMinute);
    const remainingSeconds = Math.floor((duration % milisecondsOfAMinute) / milisecondsOfASecond);

    days.textContent = remainingsDays + ' dias';
    hours.textContent = remainingsHours + ' : ';
    minutes.textContent = remainingMinutes + ' :';
    seconds.textContent = remainingSeconds;
}

updateCountdown();

setInterval(updateCountdown, milisecondsOfASecond);