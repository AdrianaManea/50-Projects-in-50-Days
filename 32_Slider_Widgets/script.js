const toggles = document.querySelectorAll('.toggle');
const goodEl = document.getElementById('good');
const cheapEl = document.getElementById('cheap');
const fastEl = document.getElementById('fast');


toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheChange(e.target)));

function doTheChange(theClickedOne) {
  if (goodEl.checked && cheapEl.checked && fastEl.checked) {
    if (goodEl === theClickedOne) {
      fastEl.checked = false;
    }

    if (cheapEl === theClickedOne) {
      goodEl.checked = false;
    }

    if (fastEl === theClickedOne) {
      cheapEl.checked = false;
    }
  }
}