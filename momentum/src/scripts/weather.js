const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

async function getWeather() {
    /* get JSON file from Open Weather Map */
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=54dbebafa073f1ba52612f6dacd313cf&units=metric`;
    const response = await fetch(url);
    const data = await response.json(); 

    weatherIcon.className = 'weather-icon owf';

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;

    /* save name to local storage */
    function setLocalStorage() {
        localStorage.setItem('city', city.value);
    }
    window.addEventListener('beforeunload', setLocalStorage);

    /* load name from local storage */
    function getLocalStorage() {
        if (localStorage.getItem('city')) {
            city.value = localStorage.getItem('city');
        }
    }
    window.addEventListener('load', getLocalStorage);
}

getWeather();

city.addEventListener('change', getWeather);