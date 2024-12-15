const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navLinkItems = document.querySelectorAll(".app-nav-links ul li a");
const body = document.body;
// const body = document.body;

// Toggle the menu visibility
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  body.classList.toggle("no-scroll");
  // body.style.opacity = 0.4;
});

// Close the menu when clicking any link
navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    body.classList.remove("no-scroll");
    // body.style.opacity = 1;
  });
});
