const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

function hideAllSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[slidePosition].classList.remove("carousel-item-visible"); // for (let slide of slides) {slide.classList.remove()} can work too //
    slides[slidePosition].classList.add("carousel-item-hidden");
  }
}

function moveToPrevSlide() {
  hideAllSlides();
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToNextSlide() {
  hideAllSlides();
  if (slidePosition === totalSlides - 1) {
    // set it to -1 because our array doesn't go above 2. once above 2, it'll get error//
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add("carousel-item-visible");
}

document
  .getElementById("carousel-btn-prev")
  .addEventListener("click", moveToPrevSlide);

document
  .getElementById("carousel-btn-nxt")
  .addEventListener("click", moveToNextSlide);
