let dots = Array.prototype.slice.call(document.getElementById('slider-dots').children),
  reviews = Array.prototype.slice.call(document.getElementById('slider-reviews').children),
  speed = 10000,
  currentSlide = 0,
  currentActive = 0,
  timer;

window.onload = () => {
  const playSlide = slide => {
    for (let k = 0; k < dots.length; k++) {
      reviews[k].classList.remove('review_active');
      reviews[k].classList.remove('review_inactive');
      dots[k].classList.remove('dots__dot_active');
    }
    if (slide < 0) slide = currentSlide = reviews.length - 1;
    if (slide > reviews.length - 1) slide = currentSlide = 0;
    if (currentActive != currentSlide) reviews[currentActive].classList.add('review_inactive');
    reviews[slide].classList.add('review_active');
    dots[slide].classList.add('dots__dot_active');

    currentActive = currentSlide;

    clearTimeout(timer);
    timer = setTimeout(() => {
      maxHeight();
      playSlide((currentSlide += 1));
    }, speed);
  };

  for (l = 0; l < dots.length; l++) {
    dots[l].addEventListener('click', function () {
      maxHeight();
      playSlide((currentSlide = dots.indexOf(this)));
    });
  }

  playSlide(currentSlide);
};

function maxHeight() {
  let blocks = document.getElementsByClassName('review__text-block'),
    height = 0;

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].offsetHeight > height) {
      height = blocks[i].offsetHeight;
    }
  }

  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.height = height + 'px';
  }
}
