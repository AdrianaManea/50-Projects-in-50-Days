const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  // console.log(value);

  const label = e.target.nextElementSibling;
  // console.log(label);

  // Get the width of input[type='range'], which is 300px
  // https://www.javascripttutorial.net/javascript-dom/javascript-getcomputedstyle/
  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  // console.log(range_width);

  // Get the width of input[type='range']+label, which is 80px
  const label_width = getComputedStyle(label).getPropertyValue('width');
  // console.log(range_width, label_width);

  const num_width = +range_width.substring(0, range_width.length - 2);
  // console.log(num_width);

  const num_label_width = +label_width.substring(0, label_width.length - 2);
  // console.log(num_label_width);

  const max = +e.target.max;
  const min = +e.target.min;
  // console.log(max, min);

  // Use the info we have to apply the left property to label in order to calculate the thumb
  const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);
  console.log(left);

  label.style.left = `${left}px`;

  label.innerHTML = value;
});


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (number, inMin, inMax, outMin, outMax) => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};