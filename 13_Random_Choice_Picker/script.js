const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  // console.log(e);
  // console.log(e.target.value);
  createTags(e.target.value);
});

function createTags(input) {
  // console.log(input);

  // With map() we trim the input when it contains blanks and characters.
  // With filter() we filter out the entries that have just blanks.
  // Take whatever we type in and then we put a comma, we want to split at that comma and create an array of whatever is between either side of these comma's 

  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
  console.log(tags);

  tagsEl.innerHTML = '';
  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}