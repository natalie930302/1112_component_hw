const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    this.classList.toggle("open");
  });
}
