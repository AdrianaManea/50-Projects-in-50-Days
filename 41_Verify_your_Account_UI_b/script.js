const codes = document.querySelectorAll('.code');
const btn = document.getElementById('btn');

const code1 = document.getElementById('code1');
const code2 = document.getElementById('code2');
const code3 = document.getElementById('code3');
const code4 = document.getElementById('code4');
const code5 = document.getElementById('code5');
const code6 = document.getElementById('code6');

codes[0].focus();


codes.forEach((code, index) => {
  code.addEventListener('keydown', (e) => {

    if (e.key >= 0 && e.key <= 9) {
      codes[index].value = '';
      setTimeout(() => index < codes.length - 1 ? codes[index + 1].focus() : codes[index], 10);

    } else if (e.key === 'Backspace') {
      setTimeout(() => index > 0 ? codes[index - 1].focus() : codes[0], 10);
    }

  });

});

code1.addEventListener('input', getValues);
code2.addEventListener('input', getValues);
code3.addEventListener('input', getValues);
code4.addEventListener('input', getValues);
code5.addEventListener('input', getValues);
code6.addEventListener('input', getValues);

function getValues() {
  let cod1 = code1.value;
  let cod2 = code2.value;
  let cod3 = code3.value;
  let cod4 = code4.value;
  let cod5 = code5.value;
  let cod6 = code6.value;

  let array = [cod1, cod2, cod3, cod4, cod5, cod6];

  let total = array.filter(Boolean).length;
  console.log(total);

  if (total == 6) {
    btn.classList.add('next');
  } else {
    btn.classList.remove('next');
  }
}