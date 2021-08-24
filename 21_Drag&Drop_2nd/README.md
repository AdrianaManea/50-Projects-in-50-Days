(How_to_build_Sortable_Drag&Drop_with_JS_WebDevSimplified)[https://www.youtube.com/watch?v=jfYWwQrtzzY]

- draggable='true'
- .draggable class - cursor: move;
- variable draggables for all p class="draggable"
- variable with our different containers
  - because our containers are where we're able to drop our different containers

So when you're doing drag and drop with html and js you need to know what your draggable elements are and where your containers are

- <div class="container">
- <p class="draggable">

- forEach() draggable addEventListener 'dragstart'
  - add a classList 'dragging'
- forEach() draggable addEventListener 'dragend'

  - remove a classList 'dragging'

- 3
- move a draggable inside a container
- drop it in another container
- loop inside container in order to determin how our dropping works for when we drop inside a container as well as how we're moving our element around
- containers.forEach(container)
  container.addEventListener('dragover', function (e) {
  });
- which element we're over top of
- if we're not over an element at all
- determin what position the element is inside of the container based on out mouse
- determin which element is inside of - second container or first container
- a - determin if we're inside which container

  - get the element we're currently dragging

    - create variable = only one element will have the .dragging class at a given time since is the element we're currently dragging
    - append it to whatever container we're inside of
      - and now it's going to add it to the bottom of whatever container you're hovering it over
      - when release - it stays there

- b - cursor has the do not allow circle, circle with the line through it

  - e.preventDefault() - by default dropping inside of an element is dissabled. We need to enable it

- c - determin the order of our element based on where our mouse position is

  - function getDragAfterElement(container, y)

    - determin our mouse position when we're dragging our element
    - return whichever element our mouse position is directly after
    - determin all of the elements inside of the containter that we're currently hovering over(the container we past in)
      - container.querySelectorAll('draggable');
    - also ignore everything that we're dragging
      - container.querySelectorAll('draggable:not(dragging)');
      - convert it to an array so we can do array operations on it
      - querySelectorAll() doesn't return an array
      - spread operator to spread it out into a new aray
      - const draggableElements = [...container.querySelectorAll('.draggable:not(dragging)')];
    - draggableElements.reduce();

      - reduce() loops through the array draggableElements and determin which single element is directly after our mouse cursor based on our y position past in function getDragAfterElement(container, y)
      - get y position from our event
      - reduce()

        - takes in a function()

          - 1st parameter is the value we're reducing down to - closest - because this is the element we're closest to directly after out mouse cursor
          - 2nd parameter - each one of the draggableElements.reduce() elements which we call child because each one is the child of the container we're inside of

        - , and a second parameter which for us is our initial value of closest

      - so for each one of out draggable elements, (closest, child) this function is going to be called and for whatever this function returns is what is this closest section inside of this function
        - function getDragAfterElement(container, y) {
          - const draggableElements = [...container.querySelectorAll('.draggable:not(dragging)')];
          - draggableElements.reduce((closest, child) => {
          - const box = child.getBoundingClientRect();
            }, { offset: Number.POSITIVE_INFINITY });
            }
      - measure from the middle of our top
      - track out half of the center of our box
      - const offset = y - box.top - box.height / 2;
      - when above an element we get negative numbers
      - when bellow and element we get a positive number
