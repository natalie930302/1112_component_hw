const carousel = body.querySelector(".carousel");
const carouselRightBtn = carousel.querySelector(".btn.right");
const carouselLeftBtn = carousel.querySelector(".btn.left");
const carouselItems = carousel.querySelectorAll(".carousel__row .item");
const carouselDots = carousel.querySelectorAll(".dots .dot");
let activeCarouselItemIndex = Array.from(carouselItems).indexOf(
  carousel.querySelector(".carousel__row .item.active")
);

function changeCarouselItem(direction) {
  carouselItems[activeCarouselItemIndex].classList.remove("active");
  carouselDots[activeCarouselItemIndex].classList.remove("active");
  activeCarouselItemIndex = activeCarouselItemIndex + direction;
  if (activeCarouselItemIndex >= carouselItems.length) {
    activeCarouselItemIndex = 0;
  }
  if (activeCarouselItemIndex < 0) {
    activeCarouselItemIndex = carouselItems.length - 1;
  }
  carouselItems[activeCarouselItemIndex].classList.add("active");
  carouselDots[activeCarouselItemIndex].classList.add("active");
}

carouselRightBtn.addEventListener("click", () => changeCarouselItem(1));
carouselLeftBtn.addEventListener("click", () => changeCarouselItem(-1));
