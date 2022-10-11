let dots = Array.prototype.slice.call(document.getElementById('slider-dots').children),
  reviews = Array.prototype.slice.call(document.getElementById('slider-reviews').children),
  speed = 5000,
  currentSlide = 0,
  currentActive = 0,
  timer;

let pictures = Array.prototype.slice.call(document.getElementById('pictures').children),
  leftArrow = document.getElementById('left-arrow'),
  rightArrow = document.getElementById('right-arrow'),
  speedGallery = 5000,
  currentSlideGallery = 0,
  currentActiveGallery = 0,
  timerGallery;

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

  const playSlideGallery = slide => {
    for (let k = 0; k < pictures.length; k++) {
      pictures[k].classList.remove('picture_active');
      pictures[k].classList.remove('picture_inactive');
    }
    if (slide < 0) slide = currentSlideGallery = pictures.length - 1;
    if (slide > pictures.length - 1) slide = currentSlideGallery = 0;
    if (currentActiveGallery != currentSlideGallery)
      pictures[currentActiveGallery].classList.add('picture_inactive');
    pictures[slide].classList.add('picture_active');

    currentActiveGallery = currentSlideGallery;

    clearTimeout(timerGallery);
    timerGallery = setTimeout(() => {
      playSlideGallery((currentSlideGallery += 1));
    }, speedGallery);
  };

  leftArrow.addEventListener('click', function () {
    playSlideGallery((currentSlideGallery -= 1));
  });
  rightArrow.addEventListener('click', function () {
    playSlideGallery((currentSlideGallery += 1));
  });

  playSlideGallery(currentSlideGallery);
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
