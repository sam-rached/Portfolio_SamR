window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  let menuToggle = document.querySelector(".toggle");
  let menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}

//TYPED
let typed = new Typed(".typed", {
  strings: ["Développeur Web"],
  typeSpeed: 45,
  backSpeed: 5,
  smartBackspace: true,
  loop: false,
});



