import getRandomInt from "./background-image-slider";

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

async function getQuotes() {
    const quotes = '../json/quotes.json';
    const response = await fetch(quotes);
    const data = await response.json();

    let randomNum = getRandomInt(data.length - 1);

    quote.textContent = `«${data[randomNum].text}»`;
    author.textContent = data[randomNum].author;
}

changeQuote.addEventListener("click", getQuotes);
getQuotes();