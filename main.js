let container = document.querySelector(".container");

let mainImg = document.querySelector(".imges img");

let menu = document.querySelector(".menu-icon");

let links = document.querySelector(".links ")

function phone(img) {
  mainImg.src= img
};

function background(color) {
  container.style.background = color;
};
menu.onclick= function () {
  links.classList.toggle("show");
}
window.onscroll = function () {
  links.classList.remove("show");
};
