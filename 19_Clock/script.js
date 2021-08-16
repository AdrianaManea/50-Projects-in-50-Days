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