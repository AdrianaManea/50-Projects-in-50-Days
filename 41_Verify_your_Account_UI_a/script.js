const codes = document.querySelectorAll('.code');
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