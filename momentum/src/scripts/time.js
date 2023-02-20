import showDate from './date';
export function showTime() {
    const time = document.querySelector('.time');
    const date = new Date();
    time.textContent = date.toLocaleTimeString();
    showDate();
    setTimeout(showTime, 1000);
}

showTime();