const reviews = [
  {
    name: 'Matias Petenatti',
    job: 'Fullstack Developer',
    image:
      'https://i.pinimg.com/564x/76/f3/91/76f3913a32c80f1843b3970c74ef7ad0.jpg',
    paragraph: 'Hola soy matias y soy desarrollador web',
  },
  {
    name: 'Bruno Martini',
    job: 'Estudiante Programacion',
    image:
      'https://i.pinimg.com/564x/87/a8/a3/87a8a378128df67cc09df6eda20be10f.jpg',
    paragraph: 'Hola soy brunito y estoy estudiando programacion :D',
  },
];

const left = document.getElementById('left');
const right = document.getElementById('right');

const image = document.querySelector('.image');
const name = document.querySelector('.name');
const job = document.querySelector('.job');
const paragraph = document.querySelector('.paragraph');

const randomBtn = document.querySelector('.surprise');

let actualReview = 0;

function showPerson(person) {
  const item = reviews[person];
  image.src = item.image;
  name.textContent = item.name;
  job.textContent = item.job;
  paragraph.textContent = item.paragraph;
}

window.addEventListener('DOMContentLoaded', () => {
  showPerson(actualReview);
});

left.addEventListener('click', () => {
  actualReview--;
  if (actualReview < 0) {
    actualReview = reviews.length - 1;
  }
  showPerson(actualReview);
});

right.addEventListener('click', () => {
  actualReview++;
  if (actualReview > reviews.length - 1) {
    actualReview = 0;
  }
  showPerson(actualReview);
});

randomBtn.addEventListener('click', () => {
  actualReview = Math.floor(Math.random() * reviews.length);
  console.log(actualReview);
  showPerson(actualReview);
});
