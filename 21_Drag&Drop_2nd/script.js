const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', function () {
    // console.log('drag start');
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', function () {
    draggable.classList.remove('dragging');
  });
});

containers.forEach(container => {
  container.addEventListener('dragover', function (e) {
    // console.log('drag over');
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    // console.log(e.clientY);
    // console.log(afterElement);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

  return draggableElements.reduce(function (closest, child) {
    const box = child.getBoundingClientRect();
    // console.log(box);
    const offset = y - box.top - box.height / 2;
    // console.log(offset);
    if (offset < 0 && offset > closest.offset) {
      return {
        offset: offset,
        element: child
      };
    } else {
      return closest;
    }
  }, {
    offset: Number.NEGATIVE_INFINITY
  }).element;
}