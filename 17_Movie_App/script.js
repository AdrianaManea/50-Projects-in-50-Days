// https://developers.themoviedb.org/3/getting-started/introduction
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1f31ba03bb5004e83f0d6c13f4e16759&page=1';

// https://developers.themoviedb.org/3/getting-started/images
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=1f31ba03bb5004e83f0d6c13f4e16759&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');
const scrollBtn = document.getElementById("scroll-btn");


// Get initial Movies
getMovies(API_URL);


async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();

  // console.log(data.results);
  showMovies(data.results);
}


// Show Movies
function showMovies(movies) {
  // 1 clean main
  // we're going to initially list movies but when we search we want to replace them
  main.innerHTML = '';

  movies.forEach((movie) => {
    // console.log(movie);
    const {
      title,
      poster_path,
      vote_average,
      overview
    } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
  
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
    `;

    main.appendChild(movieEl);
  });

}

// Utility function
function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

const refreshBtnVisibility = () => {
  if (document.documentElement.scrollTop <= 400) {
    scrollBtn.style.display = 'none';
  } else {
    scrollBtn.style.display = 'block';
  }
};

refreshBtnVisibility();

// Event Listener
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});

scrollBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

document.addEventListener('scroll', (e) => {
  refreshBtnVisibility();
  console.log(e);
});