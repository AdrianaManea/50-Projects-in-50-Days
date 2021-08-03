const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, index) => {
  // console.log(index);
  cup.addEventListener('click', () => highlightCups(index));
});

function highlightCups(index) {
  // console.log(index);

  // Toggle last cup
  if (smallCups[index].nextElementSibling !== null) {
    // if selected item contains 'full' and the next element does not then decrease the end by one
    if (smallCups[index].classList.contains('fill') && !smallCups[index].nextElementSibling.classList.contains('fill')) {
      index--;
    }
  } else {
    // if selected item contains 'full' and has no nextElementSibling (is last item in list)
    if (smallCups[index].classList.contains('fill')) {
      index--;
    }
  }

  // Select cup up to where click
  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add('fill');
    } else {
      cup.classList.remove('fill');
    }
  });

  updateBigCup();
}


function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.fill').length;
  // console.log(fullCups);
  const totalCups = smallCups.length;
  // console.log(totalCups);

  // Percentage
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullCups / totalCups * 300}px`;
    percentage.innerText = `${fullCups / totalCups * 100}%`;
  }

  // Remained
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`;

    if (fullCups === totalCups - 1) {
      remained.style.display = 'inline';
    } else {
      remained.style.display = 'flex';
    }
  }
}