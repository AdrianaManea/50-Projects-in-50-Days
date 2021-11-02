const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [{
    name: 'Miyah Myles',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/women/30.jpg',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat neque enim quam dicta culpa. Hic, non odit?',
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam ut quos repellat rem magnam. Consequatur optio autem, blanditiis ipsam quia minus quisquam laborum ipsum quos dignissimos? Labore consequatur beatae impedit tenetur esse deleniti incidunt sint, aut laborum dolorum doloribus veritatis. Fugiat neque enim quam dicta culpa. Hic, non odit?',
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam ut quos repellat rem magnam. Consequatur optio autem, blanditiis ipsam quia minus quisquam laborum ipsum quos dignissimos? Labore consequatur beatae impedit tenetur esse deleniti incidunt sint, aut laborum dolorum doloribus veritatis.',
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur optio autem, blanditiis ipsam quia minus quisquam laborum ipsum quos dignissimos? Labore consequatur beatae impedit tenetur esse deleniti incidunt sint, aut laborum dolorum doloribus veritatis. Fugiat neque enim quam dicta culpa. Hic, non odit?',
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam ut quos repellat rem magnam. Consequatur optio autem, blanditiis ipsam quia minus quisquam laborum ipsum quos dignissimos? Labore consequatur beatae impedit tenetur esse deleniti incidunt sint, aut laborum dolorum doloribus veritatis. Fugiat neque enim quam dicta culpa. Hic, non odit?',
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo: 'https://randomuser.me/api/portraits/women/55.jpg',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam ut quos repellat rem magnam. Labore consequatur beatae impedit tenetur esse deleniti incidunt sint, aut laborum dolorum doloribus veritatis. Fugiat neque enim quam dicta culpa. Hic, non odit?',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/87.jpg',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, aliquam ut quos repellat rem magnam. Consequatur  Labore consequatur beatae impedit tenetur esse deleniti incidunt sint, aut laborum dolorum doloribus veritatis. Fugiat neque enim quam dicta culpa. Hic, non odit?',
  },
];

let index = 1;

function updateTestimonial() {
  // console.log(testimonials[1]);
  const {
    name,
    position,
    photo,
    text
  } = testimonials[index];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  index++;

  if (index > testimonials.length - 1) {
    index = 0;
  }

}
setInterval(updateTestimonial, 10000);