import playList from "./playList";

const playButton = document.querySelector('.play');
const playNextButton = document.querySelector('.play-next');
const playPrevButton = document.querySelector('.play-prev');
const playListContainer = document.querySelector('.play-list');

let isPlay = false;
let playNum = 0;

const audio = new Audio();

const playAudio = playNum => {
    if (!isPlay) {
        audio.currentTime = 0;
        audio.src = playList[playNum].src;
        console.log(playNum);
        audio.play();
        isPlay = true;
        playButton.classList.add('pause');
    } else {

        audio.pause();
        isPlay = false;
        playButton.classList.remove('pause');
    }
}

/* adding titles to playlist */
playList.forEach((elem, index) => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = playList[index].title;
    li.addEventListener('click', () => playAudio(index));
    playListContainer.append(li);
});

document.querySelectorAll('.play-item').forEach((elem, index) => {});

const playNext = () => {
    if (playNum == playList.length - 1) {
        playNum = 0;
    } else {
        playNum++;
    }

    console.log(`playNext(${playNum})`);
    isPlay = false;
    playAudio(playNum);
}

const playPrev = () => {
    if (playNum == 0) {
        playNum = playList.length - 1;
    } else {
        playNum--;
    }

    console.log(`playPrev(${playNum})`);
    isPlay = false;
    playAudio(playNum);
}

playButton.addEventListener('click', () => playAudio(playNum));
playNextButton.addEventListener('click', () => playNext());
playPrevButton.addEventListener('click', () => playPrev());