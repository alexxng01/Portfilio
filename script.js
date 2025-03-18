

var typed = new Typed(".text", {
  strings: ["Frontend Developer", "PUBG-Gamer", "Sub-Civil Engineer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

burger = document.querySelector(".burger");
navbar = document.querySelector(".header");
rightNav = document.querySelector(".navbar");


burger.addEventListener("click", () => {
  navbar.classList.toggle("h-nav-resp");
  rightNav.classList.toggle("v-class-resp");


  
});
