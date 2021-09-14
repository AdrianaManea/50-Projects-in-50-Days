const container = document.getElementById('container');
const colors = ['#39c5be', '#3986c5', '#3940c5', '#7839c5', '#c53940', '#c57839', '#c5be39', '#86c539', '#3940c5'];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  // console.log(element);
  const color = getRandomColor();
  // console.log(color);

  // square is past in as the element
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  // console.log(element);
  element.style.background = '';
  setTimeout(() => {
    element.style.boxShadow = '0 0 2px #000';
  }, 1000);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}