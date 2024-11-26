function showTime() {
    const timeDisplay = document.querySelector(".time");
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    timeDisplay.textContent = timeString;
}

setInterval(showTime, 1000);