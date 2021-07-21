const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  // console.log(e);
  // console.log(e.target.value);
  createTags(e.target.value);

  // When press Enter, do this
  // console.log(tags.childElementCount);
  if (e.key === 'Enter' && tags.childElementCount > 1) {
    setTimeout(() => {
      e.target.value = '';
      textarea.disabled = true;
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  // console.log(input);

  // With map() we trim the input when it contains blanks and characters.
  // With filter() we filter out the entries that have just blanks.
  // Take whatever we type in and then we put a comma, we want to split at that comma and create an array of whatever is between either side of these comma's 

  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
  // console.log(tags);

  // Clear tagsEl
  tagsEl.innerHTML = '';

  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  // highlightTag and unHighlightTag after a certain amount of time
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);

  }, 100);

  // Stop and pick a randomTag to land on and highLightTag
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
      textarea.disabled = false;
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');

  // Random tag
  // When we use querySelectorAll we bring in a NodeList, which is similar to an array with an index. The index will be random. So Math.floor() to round down Math.random() which we want to multiply it with the length of the tags nodeList which is similar with an array
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}