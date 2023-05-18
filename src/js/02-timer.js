//     Кнопка «Start» повинна бути неактивною доти, доки користувач
// не вибрав дату в майбутньому.
// Натисканням на кнопку «Start» починається відлік часу до обраної
// дати з моменту натискання.
// Відлік часу
// Натисканням на кнопку «Start» скрипт повинен обчислювати раз
// на секунду, скільки часу залишилось до вказаної дати,
//     і оновлювати інтерфейс таймера, показуючи чотири
// цифри: дні, години, хвилини і секунди у форматі xx: xx: xx: xx.

// Кількість днів може складатися з більше, ніж двох цифр.
// Таймер повинен зупинятися, коли дійшов до кінцевої дати,
//     тобто 00: 00: 00: 00.

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputStartDate: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  timer: document.querySelector('.timer'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
const childrenOfTimer = refs.timer.querySelectorAll('.value');
const labels = refs.timer.querySelectorAll('.label');

// setting styles ===================================================
refs.inputStartDate.setAttribute('style', 'margin-bottom:15px');
refs.timer.setAttribute('style', 'display:flex; gap:5px;');
childrenOfTimer.forEach(element => {
  element.setAttribute(
    'style',
    'display: flex; justify-content: center; font-size: 60px; width:100%; padding-left: 10px; padding-right: 10px; border: 2px solid black; border-radius:10px; background-color:#FFFFFF'
  );
});
labels.forEach(element => {
  element.setAttribute('style', 'display: block; text-align: center');
});
// end of setting styles================================================

refs.startBtn.setAttribute('disabled', '');
let targetDate = 0;
let intetvalId = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    targetDate = selectedDates[0].getTime();
    if (targetDate <= Date.now()) {
      Notify.failure('Please choose a date in the future.');
      return;
    }
    refs.startBtn.removeAttribute('disabled');
    return targetDate;
  },
};

const fp = flatpickr(refs.inputStartDate, options);

refs.startBtn.addEventListener('click', onClick);

function onClick() {
  refs.startBtn.setAttribute('disabled', '');
  intetvalId = setInterval(updateTime, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day)
    .toString()
    .padStart(2, 0);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour)
    .toString()
    .padStart(2, 0);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute)
    .toString()
    .padStart(2, 0);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second)
    .toString()
    .padStart(2, 0);

  return { days, hours, minutes, seconds };
}

function updateTime() {
  const differDate = targetDate - Date.now();
  if (differDate <= 0) {
    clearInterval(intetvalId);
    return;
  }
  const formData = convertMs(differDate);
  const { days, hours, minutes, seconds } = formData;
  refs.days.innerHTML = days;
  refs.hours.innerHTML = hours;
  refs.minutes.innerHTML = minutes;
  refs.seconds.innerHTML = seconds;
}
