const screens = document.querySelectorAll('.screen');
const start_btn = document.getElementById('start-btn');
const choose_purrr_btns = document.querySelectorAll('.choose-purrr-btn');
const game_container = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');

let seconds = 0;
let score = 0;
let seleted_purrr = {};

// screens[0].classList.add('up');

start_btn.addEventListener('click', () => screens[0].classList.add('up'));

choose_purrr_btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    selected_purrr = {
      src,
      alt
    };
    screens[1].classList.add('up');
    setTimeout(createPurrr, 1000);
    startGame();
  });
});


function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;
  timeEl.innerHTML = `Time: ${mins}:${secs}`;
  seconds++;
}


function createPurrr() {
  const purrr = document.createElement('div');
  purrr.classList.add('purrr');
  const {
    x,
    y
  } = getRandomLocation();

  purrr.style.top = `${y}px`;
  purrr.style.left = `${x}px`;

  purrr.innerHTML = `<img src="${selected_purrr.src}" alt="${selected_purrr.alt}" style="transform: rotate(${Math.random() *360}deg)">`;

  purrr.addEventListener('click', petCat);

  game_container.appendChild(purrr);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return {
    x,
    y
  };
}

function petCat() {
  // console.log(123);
  increaseScore();
  this.classList.add('pet');
  setTimeout(() => this.remove, 2000);
  addPurrrs();
}

function addPurrrs() {
  setTimeout(createPurrr, 400);
  setTimeout(createPurrr, 800);
}


function increaseScore() {
  score++;
  // if (score > 19) {
  //   message.classList.add('visible');
  // }

  if (score >= 19 && score <= 21) {
    message.classList.add('visible');
  } else if (score <= 22) {
    message.classList.remove('visible');
  }

  scoreEl.innerHTML = `Score:${score}`;
}