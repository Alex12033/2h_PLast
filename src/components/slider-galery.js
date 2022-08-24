require('../scss/projects.scss');

let next = document.querySelector(".next-gallery");
let prev = document.querySelector(".prev-gallery");

let dotsSlider = document.querySelectorAll('.gallery__slider');

const parag = document.querySelectorAll('.project-gallery-card');

function projectSlider() {
  let slideIndex = 1;

  next.addEventListener('click', () => {
    showSlides(slideIndex += 1);
  });

  prev.addEventListener('click', () => {
    showSlides(slideIndex -= 1);
  });

  function mobileSwipe() {
    parag.forEach((n) => {
      n.addEventListener('touchstart', handleTouchStart, false);
    });

    parag.forEach((n) => {
      n.addEventListener('touchmove', handleTouchMove, false);
    });
  }

  if (window.innerWidth < 800) {
    showSlides(slideIndex);
    mobileSwipe();
  }

  window.addEventListener('resize', () => {
    const windowWidht = window.innerWidth;

    if (windowWidht < 800) {
      showSlides(slideIndex);
      mobileSwipe();
    } else {
      hideSlides();

      parag.forEach((n) => {
        n.removeEventListener('touchstart', handleTouchMove, false);
      });

      parag.forEach((n) => {
        n.removeEventListener('touchmove', handleTouchMove, false);
      });
    }
  });

  dotsSlider.forEach((dot) => {
    dot.addEventListener('click', (event) => {
      showSlides((slideIndex = event.target.id));
    });
  });

  function showSlides(n) {
    let i;

    let slides = document.getElementsByClassName('project-gallery-card');

    let dots = document.getElementsByClassName('gallery__slider-item');

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace('active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  }

  function hideSlides() {
    let slides = document.getElementsByClassName('project-gallery-card');

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'block';
    }
  }

  //                  Mobile SWIPE

  let x1 = null;
  let y1 = null;

  function handleTouchStart(event) {
    const firstToush = event.touches[0];
    x1 = firstToush.clientX;
    y1 = firstToush.clientY;
  }

  function handleTouchMove(event) {
    if (!x1 || !y1) {
      return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        showSlides((slideIndex -= 1));
      } else {
        showSlides((slideIndex += 1));
      }
    }
    x1 = null;
    y1 = null;
  }
}

module.exports = projectSlider;
