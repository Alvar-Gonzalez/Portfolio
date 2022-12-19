// Displays Main Menu
const menuToggle = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  if (menuToggle.className === "mainNav") {
    menuToggle.className += " menuToggle";
  } else {
    menuToggle.className = "mainNav";
  }
})