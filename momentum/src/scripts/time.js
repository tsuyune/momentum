import showDate from './date';
import showTimeOfDay from './greeting';

const time = document.querySelector('.time');

const showTime = () => {
    const date = new Date();
    time.textContent = date.toLocaleTimeString();
    showDate();
    showTimeOfDay();
    setTimeout(showTime, 1000);
}

showTime();