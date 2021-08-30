const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const nameJD = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);


function getData() {
  header.innerHTML = `<img
  src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="">`;
  title.innerHTML = `Work from home experience`;
  excerpt.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, debitis?`;
  profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/women/40.jpg" alt="">`;
  nameJD.innerHTML = `Jenny Doe`;
  date.innerHTML = `August 30, 2021`;

  animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
  animatedBgTexts.forEach(bg => bg.classList.remove('animated-bg-text'));
}