let hours = 0;
let minutes = 0;
let seconds = 0;
let laps = [];
let intervalId = null;
let isRunning = false;

const displayElement = document.getElementById('display');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const restartButton = document.getElementById('restart-button');
const lapButton = document.getElementById('lap-button');
const lapsElement = document.getElementById('laps');

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
restartButton.addEventListener('click', restartStopwatch);
lapButton.addEventListener('click', recordLap);

function startStopwatch() {
    if (!isRunning) {
        intervalId = setInterval(updateStopwatch, 1000);
        isRunning = true;
        startButton.disabled = true;
        pauseButton.disabled = false;
        restartButton.disabled = false;
        lapButton.disabled = false;
    }
}

function pauseStopwatch() {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
        startButton.disabled = false;
        pauseButton.disabled = true;
    }
}

function restartStopwatch() {
    if (isRunning) {
        pauseStopwatch();
    }
    hours = 0;
    minutes = 0;
    seconds = 0;
    laps = [];
    displayElement.textContent = '00:00:00';
    lapsElement.innerHTML = '';
}

function recordLap() {
    const lapTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    laps.push(lapTime);
    const lapElement = document.createElement('li');
    lapElement.textContent = `Lap ${laps.length}: ${lapTime}`;
    lapsElement.appendChild(lapElement);
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes === 60) {
        hours++;
        minutes = 0;
    }
    displayElement.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(time) {
    return (time < 10 ? '0' : '') + time;
}