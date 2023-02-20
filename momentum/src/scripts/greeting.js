const getTimeOfDay = time => {
    if (time >= 6 && time <= 12) return 'morning';
    else if (time >= 13 && time <= 18) return 'afternoon';
    else if (time >= 19 && time <= 23) return 'evening';
    else return 'night';
}

export function showGreeting() {
    const greeting = document.querySelector('.greeting');
    const hours = new Date().getHours();
    greeting.textContent = `Good ${getTimeOfDay(hours)}`;
    const name = document.querySelector('.name');

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
    window.addEventListener('load', getLocalStorage);
}

showGreeting();