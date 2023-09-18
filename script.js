let show = true;
const menuContent = document.querySelector(".content-header");
const menuToggle = menuContent.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function () {
  menuContent.classList.toggle("on", show);
  show = !show;
});
