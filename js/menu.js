"use strict";

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const bgColorsItem = ["#ff8c00", "#f54888", "#4343f5", "#f7c522", "#65ddb7"];
const menu = body.querySelector(".menu");
const content = body.querySelector(".content");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".menu__item.active");
let activeComponent = content.querySelector("." + activeItem.value);

function clickItem(item, index) {
  menu.style.removeProperty("--timeOut");

  if (activeItem == item) return;
  if (activeItem) {
    activeItem.classList.remove("active");
    activeComponent.classList.add("hide");
  }

  activeItem = item;
  item.classList.add("active");
  activeComponent = content.querySelector("." + item.value);
  activeComponent.classList.remove("hide");

  document.documentElement.style.setProperty(
    "--bgColorItem",
    bgColorsItem[index]
  );
  document.documentElement.style.setProperty(
    "--bgColorBody",
    bgColorsBody[index]
  );

  offsetMenuBorder(activeItem, menuBorder);
}

function offsetMenuBorder(element, menuBorder) {
  const offsetActiveItem = element.getBoundingClientRect();
  const left =
    Math.floor(
      offsetActiveItem.left -
        menu.offsetLeft -
        (menuBorder.offsetWidth - offsetActiveItem.width) / 2
    ) + "px";
  menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => clickItem(item, index));
});

window.addEventListener("resize", () => {
  offsetMenuBorder(activeItem, menuBorder);
  menu.style.setProperty("--timeOut", "none");
});
