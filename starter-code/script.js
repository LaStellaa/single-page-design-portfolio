"use strict";

const slides = document.querySelector(".slides-container");
const arrowLeft = document.querySelector(".left-arrow");
const arrowRight = document.querySelector(".right-arrow");

const slideWidth = slides.querySelector(".slide").clientWidth;

let direction;

function moveSlides() {
  slides.style.transition = "none";

  if (direction === -1) {
    slides.appendChild(slides.firstElementChild);
  } else if (direction === 1) {
    slides.prepend(slides.lastElementChild);
  }

  slides.style.transform = "translateX(0)";

  void slides.offsetWidth;

  setTimeout(() => {
    slides.style.transition = "transform 0.5s ease-in-out";
  }, 0);
}

arrowLeft.addEventListener("click", function () {
  console.log("clicked");
  direction = 1;

  slides.style.transition = "transform 0.5s ease-in-out";
  slides.style.transform = `translateX(${slideWidth}px)`;
});

arrowRight.addEventListener("click", function () {
  direction = -1;

  slides.style.transition = "transform 0.5s ease-in-out";
  slides.style.transform = `translateX(${-slideWidth}px)`;
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    arrowLeft.click();
  } else if (event.key === "ArrowRight") {
    arrowRight.click();
  }
});

slides.addEventListener("transitionend", moveSlides);
