const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
// getUser('adrianamanea');

// function getUser(username) {
//   axios.get(APIURL + username)
//     .then(response => console.log(response))
//     .catch(error => console.log(error));
// }

async function getUser(username) {
  // res in an object that has a property od data that is another object
  // const response = await axios.get(APIURL + username);
  // console.log(response.data);

  try {
    // destructure
    const {
      data
    } = await axios.get(APIURL + username);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = '';
  }
})