const dateElement = document.querySelector('.date');

export default function showDate() {
    const date = new Date();
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    dateElement.textContent = date.toLocaleDateString('en-US', options);
}