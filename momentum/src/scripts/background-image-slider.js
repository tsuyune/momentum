import {
    getTimeOfDay
} from './greeting';

/* randomize number from 1 to num inclusive */
export default function getRandomInt(num) {
    return Math.floor(Math.random() * num) + 1;
}

let randomNum = getRandomInt(20);

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
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

const bgSlider = () => {
    slideNext.addEventListener('click', getSlideNext);
    slidePrev.addEventListener('click', getSlidePrev);
}

/* add nulls before randomNum and use getTimeOfDay function to create image link */
const setBg = async () => {
    let bgNum = String(randomNum).padStart(2, 0);
    const hours = new Date().getHours();
    const timeOfDay = getTimeOfDay(hours);

    /* smooth image scrolling */
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;

    await img.decode();

    document.body.style.backgroundImage = `url('${img.src}')`;
}

bgSlider();
setBg();