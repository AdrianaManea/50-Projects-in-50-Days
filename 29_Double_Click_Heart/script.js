const loveMe = document.querySelector('.loveMe'),
  times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

// loveMe.addEventListener('dblclick', (e) => {
//   console.log(123);
// })

loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
    // console.log(clickTime);
  } else {
    if ((new Date().getTime() - clickTime < 800)) {
      // console.log(456);
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;
  // console.log(x, y);

  const leftOffset = loveMe.offsetLeft;
  const topOffset = loveMe.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;
  // console.log(xInside, yInside);

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 1000);
};