const result = document.getElementById('result');
const filter = document.getElementById('filter');

// were the fetched data goes
const listItems = [];

getData();


filter.addEventListener('input', function (e) {
  // console.log(e.target.value);
  // e.target.value gives us what we type in
  filterData(e.target.value);
});


async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');

  // const data = await res.json();
  // data.results.forEach()

  // console.log(data);

  // or destructure - pull out results
  const {
    results
  } = await res.json();


  // Clear result
  result.innerHTML = '';

  results.forEach(user => {
    // console.log(user);

    // construct li for users
    const li = document.createElement('li');

    listItems.push(li);

    li.innerHTML = `
    <img src="${user.picture.large}"" alt="${user.name.first}"> 
    <div class="user-info">
      <h4>${user.name.first} ${user.name.last}</h4>
      <p>${user.location.city} ${user.location.country}</p>
    </div>
    `;

    result.appendChild(li);
  });
}


function filterData(searchTerm) {
  // console.log(searchTerm);

  listItems.forEach(item => {
    // console.log(item);

    // check to see if it matches the user
    // if it has the letters we typed in then remove .hide
    // if it doesn't then add .hide
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}