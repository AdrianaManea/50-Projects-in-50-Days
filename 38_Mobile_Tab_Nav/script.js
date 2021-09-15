const images = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((listItem, index) => {
  // console.log(listItem);
  listItem.addEventListener('click', () => {
    hideAllImages();
    hideAllItems();

    listItem.classList.add('active');
    images[index].classList.add('show');
  });
});

function hideAllImages() {
  images.forEach((image) => image.classList.remove('show'));
}

function hideAllItems() {
  listItems.forEach((listItem) => listItem.classList.remove('active'));
}