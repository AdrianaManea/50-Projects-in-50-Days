const numbers = document.querySelectorAll('.numbers span'); // nodelist
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();


function resetDOM() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');

  numbers.forEach((number) => {
    number.classList.value = '';
  });

  numbers[0].classList.add('in');
}


function runAnimation() {
  numbers.forEach((number, index) => {
    // console.log(number, index);
    const nextToLast = numbers.length - 1;
    // console.log(nextToLast);
    number.addEventListener('animationend', (e) => {
      // console.log(e.animationName);

      if (e.animationName === 'goIn' && index !== nextToLast) {
        number.classList.remove('in');
        number.classList.add('out');
      } else if (e.animationName === 'goOut' && number.nextElementSibling) {
        number.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}

replay.addEventListener('click', () => {
  resetDOM();
  runAnimation();
});