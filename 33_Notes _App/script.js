const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
  notes.forEach(note => addNewNote(note));
}
console.log(notes);

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
  <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>

  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>
  `;

  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');
  const mainDiv = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  // marked()
  textArea.value = text;
  mainDiv.innerHTML = marked(text);

  deleteBtn.addEventListener('click', () => {
    note.remove();
    updateLocalStorage();
  });
  editBtn.addEventListener('click', () => {
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  textArea.addEventListener('input', (e) => {
    // console.log(e.target.value);
    // Use destructuring to pull out 'value' from 'e.target'
    const {
      value
    } = e.target;

    mainDiv.innerHTML = marked(value);

    updateLocalStorage();
  });


  document.body.appendChild(note);
}

function updateLocalStorage() {
  const notesText = document.querySelectorAll('textarea');
  const notes = [];
  notesText.forEach(note => notes.push(note.value));
  // console.log(notes);

  localStorage.setItem('notes', JSON.stringify(notes));
}