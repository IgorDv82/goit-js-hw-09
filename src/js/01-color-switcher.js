function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

refs.stopBtn.setAttribute('disabled', 'true');

let intervalId = 0;

refs.startBtn.addEventListener('click', startColoring);
refs.stopBtn.addEventListener('click', stopColoring);

function startColoring() {
  intervalId = setInterval(
    () => (refs.body.style.backgroundColor = getRandomHexColor()),
    1000
  );
  refs.startBtn.setAttribute('disabled', true);
  refs.stopBtn.removeAttribute('disabled');
}

function stopColoring() {
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', 'true');
  clearInterval(intervalId);
}
