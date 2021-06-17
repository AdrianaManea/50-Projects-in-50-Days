const panels = document.querySelectorAll('.panel');
// console.log(panels);

panels.forEach((panel) => {
  // console.log(panel);
  panel.addEventListener('click', () => {
    // console.log(123);

    // before add class active remove the class of active
    removeActiveClasses();

    // whatever we click on - add class active
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}