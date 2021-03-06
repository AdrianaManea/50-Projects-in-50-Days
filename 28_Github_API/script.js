const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');


// getUser('adrianamanea');

// function getUser(username) {
//   axios.get(APIURL + username)
//     .then(response => console.log(response))
//     .catch(error => console.log(error));
// }

async function getUser(username) {
  // res in an object that has a property od data that is another object
  // destructure
  // const response = await axios.get(APIURL + username);
  // console.log(response.data);

  try {
    const {
      data
    } = await axios.get(APIURL + username);
    // console.log(data);

    createUserCard(data);

    getRepos(username);

  } catch (error) {
    // console.log(error);

    if (error.response.status == 404) {
      createErrorCard('No profile with this username');
    }
  }
}

async function getRepos(username) {
  try {
    const {
      data
    } = await axios.get(APIURL + username + '/repos?sort=updated');

    addReposToCard(data);

  } catch (error) {
    createErrorCard('Problem fetching repos');
  }
}


function createUserCard(user) {
  const cardHTML = `
  <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio == null ? "Bio is not available for this user" : user.bio}</p>

      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <h4>Latest Repositories</h4>
      <div id="repos"></div>
    </div>
  </div>
  `;

  main.innerHTML = cardHTML;
}

function createErrorCard(message) {
  const cardHTML = `
    <div class="card">
      <h1>${message}</h1>
    </div>
  `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos.slice(0, 10).forEach(repo => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = '';
  }
});