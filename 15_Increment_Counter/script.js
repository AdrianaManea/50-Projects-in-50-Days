const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    // console.log(target);
    // console.log(typeof target);
    const c = +counter.innerHTML;
    // console.log(c);
    const increment = target / 800;
    // console.log(increment);

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;

      setTimeout(updateCounter, 3);
    } else {
      counter.innerText = target;
    }

  };

  updateCounter();
});