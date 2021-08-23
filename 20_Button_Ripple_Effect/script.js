const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    // the position where we click in the viewport
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);

    // the position of the button itself not where we click in the button
    // where it starts on the x and y
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    // console.log(buttonTop, buttonLeft);

    // calculate where in the button we click
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    // console.log(xInside, yInside);

    // Create circle
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});