const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  // console.log(window.innerHeight);

  // 0.8 is equivalent of 4/5
  // So effectively we are saying that triggerBottom is 80% of window.innerHeight.
  // console.log(window.innerHeight / 5 * 4);

  // So basically we're saying that whatever the innerHeight of the window, measure it, take that result and at the 80% of that window.innerHeight .. do the rest  
  const triggerBottom = window.innerHeight / 5 * 4;

  // Loop through our nodeList
  boxes.forEach(box => {
    // The top for each box
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const boxTop = box.getBoundingClientRect().top;

    // See if the top of the box is less than the triggerBottom, if it is -> add .show .. if not -> remove .show
    // Meaning when the top of boxTop goes to a vh higher that 80% of the page(triggerBottom), then add .show, else remove
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}