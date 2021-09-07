const resultEl = document.getElementById('result'),
  lengthEl = document.getElementById('length'),
  uppercaseEl = document.getElementById('uppercase'),
  lowercaseEl = document.getElementById('lowercase'),
  numbersEl = document.getElementById('numbers'),
  symbolsEl = document.getElementById('symbols'),
  generateEl = document.getElementById('generate'),
  clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};


clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if (!password) {
    return
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard');

});


generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  // console.log(length);
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  // console.log(hasLower, hasUpper, hasNumber, hasSymbol);
  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});



function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  // console.log(typesCount);
  const typesArr = [{
    lower
  }, {
    upper
  }, {
    number
  }, {
    symbol
  }].filter(item => Object.values(item)[0]);
  // console.log(typesArr);

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      // console.log(type);
      const funcName = Object.keys(type)[0];
      // console.log(funcName);
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}


function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// console.log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// console.log(getRandomNumber());

function getRandomSymbol() {
  const symbols = '!@#$%^&*()[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// console.log(getRandomSymbol());