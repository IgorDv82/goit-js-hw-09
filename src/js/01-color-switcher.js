function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

stopBtn.setAttribute('disabled', 'true');
let intervalId = 0;

startBtn.addEventListener('click', startColoring);
stopBtn.addEventListener('click', stopColoring);

function startColoring() {
  intervalId = setInterval(
    () => (body.style.backgroundColor = getRandomHexColor()),
    1000
  );
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
}

function stopColoring() {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'true');
  clearInterval(intervalId);
}
