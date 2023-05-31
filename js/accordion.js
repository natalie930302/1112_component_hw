const accordionItems = document.querySelectorAll(".accordion .item");
accordionItems.forEach((item, index) => {
  item.addEventListener("click", () => clickAccordionItem(item, index));
});

function clickAccordionItem(item, index) {
  item.classList.toggle("open");
}