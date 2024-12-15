const slides = document.querySelectorAll(".slide");
const main = document.querySelector(".main");
let currentSlide = 0;

document.addEventListener("touchstart", (event) => {
  const touchX = event.touches[0].clientX;
  const screenWidth = window.innerWidth;

  if (touchX < screenWidth / 2) {
    // Swipe left
    if (currentSlide > 0) {
      currentSlide--;
      if (currentSlide == 1) {
        main.classList.add("bg-red-2");
      } else {
        main.classList.remove("bg-red-2");
      }
    }
  } else {
    // Swipe right
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      if (currentSlide == 1) {
        main.classList.add("bg-red-2");
      } else {
        main.classList.remove("bg-red-2");
      }
    }
  }

  slides.forEach((slide, index) => {
    slide.classList.add("hidden");
    if (index === currentSlide) {
      slide.classList.remove("hidden");
    }
  });
});
