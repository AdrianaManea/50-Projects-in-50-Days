const sliderContainer = document.querySelector('.slider-container'),
  slideRight = document.querySelector('.right-slide'),
  slideLeft = document.querySelector('.left-slide'),
  upButton = document.querySelector('.up-button'),
  downButton = document.querySelector('.down-button'),
  slidesLength = slideRight.querySelectorAll('div').length;

// console.log(slidesLength);

// Which index is in view
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('testUp'));
downButton.addEventListener('click', () => changeSlide('testDown'));

const changeSlide = (direction) => {
  // console.log(direction);
  const sliderHeight = sliderContainer.clientHeight;
  // console.log(sliderHeight);
  if (direction === 'testUp') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'testDown') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};