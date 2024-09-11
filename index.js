const navitems_menu = document.getElementById("ham-menu");
const navMenu = document.getElementById("navMenu");

navitems_menu.addEventListener("toggle", toggleMenu());
function toggleMenu() {
  navMenu.classList.toggle(".nav-items-container.active");
}
