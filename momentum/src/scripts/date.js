export default function showDate() {
    const dateElement = document.querySelector('.date');
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    dateElement.textContent = date.toLocaleDateString('en-US', options);
}