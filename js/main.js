const navBarContainer = document.querySelector(".navbar-container");
const a = document.querySelectorAll(".navbar-container a");
const bar = document.querySelectorAll(".hamburger span");
const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.onscroll = () => {
  navBarContainer.style.transition = "all 0.2s ease-out";
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navBarContainer.style.backgroundColor = "white";
    a.forEach((e) => {
      e.style.color = "black";
    });

    bar.forEach((e) => {
      e.style.backgroundColor = "black";
    });
  } else {
    navBarContainer.style.background = "transparent";
    a.forEach((e) => {
      e.style.color = "white";
    });

    bar.forEach((e) => {
      e.style.backgroundColor = "white";
    });
  }
};
