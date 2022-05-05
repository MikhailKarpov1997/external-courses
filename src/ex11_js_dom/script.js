const images = ['pic_1.jpeg', 'pic_2.jpg', 'pic_3.jpg', 'pic_4.jpg', 'pic_5.jpg'];

const btnLeft = document.querySelector('.left-button');
const btnRight = document.querySelector('.right-button');
let i = 0;
const image = document.querySelector('img');
image.setAttribute('src', images[i]);

btnLeft.addEventListener('click', () => {
  i -= 1;
  if (i < 0) {
    i = images.length - 1;
  }
  image.setAttribute('src', images[i]);
});

btnRight.addEventListener('click', () => {
  i += 1;
  if (i >= images.length) {
    i = 0;
  }

  image.setAttribute('src', images[i]);
});
