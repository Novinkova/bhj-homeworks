const sliderItems = document.querySelectorAll('.slider__item');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
let index;

for (let i = 0; i < sliderItems.length; i++) {
  const slides = sliderItems[i];

	if (slides.classList.contains('slider__item_active')) {
		index = i;
	}
}

const showSlide = (sliderImage) => sliderImage.classList.add('slider__item_active');
const hideSlide = (sliderImage) => sliderImage.classList.remove('slider__item_active');

function nextImage() {
  hideSlide(sliderItems[index]);

  index++;

  if (index >= sliderItems.length) {
  	index -= sliderItems.length;
  }

  showSlide(sliderItems[index]);
}

function prevImage() {
  hideSlide(sliderItems[index]);

  index--;

  if (index < 0) {
  	index += sliderItems.length;
  }

  showSlide(sliderItems[index]);
}

arrowPrev.onclick = prevImage;
arrowNext.onclick = nextImage;