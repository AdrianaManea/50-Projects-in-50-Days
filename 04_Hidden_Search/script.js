const search = document.getElementById('search'),
  input = document.getElementById('input'),
  btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});