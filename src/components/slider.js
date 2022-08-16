require('../scss/contact-form.scss');

let next = document.querySelectorAll(".next");
let prev = document.querySelectorAll(".prev");

let dotsSlider = document.querySelectorAll(".reviews__slider");

function reviewsSlider() {
  let slideIndex = 1;
  showSlides(slideIndex);

  next.forEach((n) => {
    n.addEventListener('click', () => {
        showSlides((slideIndex += 1));
  }) 
  });

  prev.forEach((p) => {
    p  .addEventListener('click', () => {
        showSlides((slideIndex -= 1));
  })
  });

  dotsSlider.forEach(dot => {
    dot.addEventListener('click', (event) => {
      showSlides((slideIndex = event.target.id));
    });
  })


  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("rewievs");
    let dots = document.getElementsByClassName("reviews__slider-item");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    slides[slideIndex - 1].style.display = "block";
    }
  }

  //                  Mobile SWIPE
  const parag = document.querySelectorAll(".rewievs");

  parag.forEach(() => {
    addEventListener("touchstart", handleTouchStart, false);
  });
  parag.forEach(() => {
    addEventListener("touchmove", handleTouchMove, false);
  });

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
        showSlides((slideIndex += 1));
      } else {
        showSlides((slideIndex -= 1));
      }
    }
    x1 = null;
    y1 = null;
  }
}

module.exports = reviewsSlider;
