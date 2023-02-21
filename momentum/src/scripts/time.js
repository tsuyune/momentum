import showDate from './date';
import showTimeOfDay from './greeting';

const showTime = () => {
    const time = document.querySelector('.time');
    const date = new Date();
    time.textContent = date.toLocaleTimeString();
    showDate();
    showTimeOfDay();
    setTimeout(showTime, 1000);
}

showTime();