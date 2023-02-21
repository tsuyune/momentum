import {getTimeOfDay} from './greeting';

/* randomize number from 1 to 20 inclusive */
const getRandomInt = () => {
    return Math.floor(Math.random() * 20) + 1;
}
let randomNum = getRandomInt();

/* slider - show next image by increasing randomNum and call setBg function with randomNum as an argument */
const getSlideNext = () => {
    if (randomNum == 20) randomNum = 1;
    else randomNum++;
    setBg(randomNum);
}

/* slider - show previous image by decreasing randomNum and call setBg function with randomNum as an argument */
const getSlidePrev = () => {
    if (randomNum == 1) randomNum = 20;
    else randomNum--;
    setBg(randomNum);
}

/* slider */
const bgSlider = () => {
    const slideNext = document.querySelector('.slide-next');
    const slidePrev = document.querySelector('.slide-prev');
    slideNext.addEventListener('click', getSlideNext);
    slidePrev.addEventListener('click', getSlidePrev);
}

/* add nulls before randomNum and use getTimeOfDay function to create image link */
const setBg = () => {
    const body = document.querySelector('body');

    let bgNum = String(randomNum).padStart(2, 0);
    const hours = new Date().getHours();
    const timeOfDay = getTimeOfDay(hours);

    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url('${img.src}')`;
    }
    
}

bgSlider();
setBg();