const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
  todos.forEach(todo => addTodo(todo));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }
  // console.log(todoText);

  // construct li; make sure a todoText exists
  if (todoText) {
    const todoEl = document.createElement('li');
    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;

    // toggle completed
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');
      updateLS();
    });

    // delete todoEl
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      todoEl.remove();

      updateLS();
    });

    // Add to DOM
    todosUl.appendChild(todoEl);

    // Clear input
    input.value = '';

    updateLS();

  }
}

// localStorage.setItem('name', JSON.stringify(obj));
// JSON.parse(localStorage.getItem(obj));


function updateLS() {
  todosEls = document.querySelectorAll('li');

  const todos = [];

  todosEls.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}