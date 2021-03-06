const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;


// Add eventListener on arrows on click
rightBtn.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

// Add eventListener on arrows on keydown
window.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowRight') {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
      activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
  }
  if (event.code === 'ArrowLeft') {
    activeSlide--;

    if (activeSlide < 0) {
      activeSlide = slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
  }
});


setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));

  slides[activeSlide].classList.add('active');
}