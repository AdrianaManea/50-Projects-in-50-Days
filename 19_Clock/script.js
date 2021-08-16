const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');

// Array for days
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Array for months
const months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"
];

// Dark Mode
toggleEl.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  // console.log(e.target);

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light mode';
  }
});

function setTime() {
  const time = new Date();
  // console.log(time);
  const month = time.getMonth();
  // console.log(month);
  const day = time.getDay();
  // console.log(day);
  const date = time.getDate();
  // console.log(date);
  const hours = time.getHours();
  // console.log(hours);
  const minutes = time.getMinutes();
  // console.log(minutes);
  const hoursForClock = hours % 12 + minutes / 60;
  // console.log(hoursForClock);
  const seconds = time.getSeconds();
  // console.log(seconds);

  hourEl.style.transform = `translate(-50%, -100%) rotate(${hoursForClock/ 12 * 360}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutes/ 60 * 360}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${seconds/ 60 * 360}deg)`;


  // const hoursForClock = hours % 12;
  // const ampm = hours >= 12 ? 'PM' : 'AM';
  // hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
  // minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
  // secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
  // timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;

  timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// const scale = (number, inMin, inMax, outMin, outMax) => {
//   return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }

setTime();

setInterval(setTime, 1000);