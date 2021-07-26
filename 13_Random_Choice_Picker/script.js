const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  // console.log(e);
  // console.log(e.target.value);
  createTags(e.target.value);

  // When press Enter, do this
  // console.log(tags.childElementCount);
  if (e.key === 'Enter' && tags.childElementCount !== 0) {
    // Clear input
    setTimeout(() => {
      e.target.value = '';
      textarea.disabled = true;
    }, 10);

    randomSelect();
  }
});


// Create tags
function createTags(input) {
  // console.log(input);

  // .split() - by the comma
  // .filter() - return certain things based on a conditional
  // .trim() - trim out any white space
  // .map() - creates a new array populated with the results of calling a provided function on every element in the calling array. (manipulate the array)

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

// Create randomSelect
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

  // Stop and pickRandomTag to land on and add highLightTag
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
      textarea.disabled = false;
      textarea.focus();
    }, 100);
  }, times * 100);
}


// Create pickRandomTag
function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');

  // randomTag
  // When we use querySelectorAll we bring in a NodeList, which is similar to an array with an index. The index will be random. So Math.floor() to round down, Math.random() which we want to multiply it with the length of the tags nodeList which is similar with an array
  return tags[Math.floor(Math.random() * tags.length)];
}


function highlightTag(tag) {
  tag.classList.add('highlight');
}


function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}