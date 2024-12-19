let typed = new Typed(".input", {
  strings: ["Web Developer", "Freelancer", "Mern Stack Developer"],
  typeSpeed: 70,
  backSpeed: 60,
  loop: true,
});

// sticky-header-js
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

// hamburger

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};
