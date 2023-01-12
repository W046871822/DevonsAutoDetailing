var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");

hamburger.addEventListener("click", function() {
  menu.classList.toggle("visible");
});