const ham_menu = document.getElementById("ham-menu");
const nav_menu = document.getElementById("navMenu");

ham_menu.addEventListener("click", function () {
  nav_menu.classList.toggle("none");
});
