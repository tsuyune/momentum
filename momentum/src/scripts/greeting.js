export function getTimeOfDay(time) {
    if (time >= 6 && time <= 11) return 'morning';
    else if (time >= 12 && time <= 17) return 'afternoon';
    else if (time >= 18 && time <= 23) return 'evening';
    else return 'night';
}

const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');

export default function showTimeOfDay() {
    const hours = new Date().getHours();
    const timeOfDay = getTimeOfDay(hours);
    greeting.textContent = `Good ${timeOfDay}`;
}

const showName = () => {
    /* save name to local storage */
    function setLocalStorage() {
        localStorage.setItem('name', name.value);
    }
    window.addEventListener('beforeunload', setLocalStorage);

    /* load name from local storage */
    function getLocalStorage() {
        if (localStorage.getItem('name')) {
            name.value = localStorage.getItem('name');
        }
    }
    getLocalStorage();
}

showName();