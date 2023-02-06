"use strict";
/* variables */
const nav = document.querySelector(".nav");
const openNav = document.querySelector(".open-nav");
const hiddenNav = document.querySelector(".nav-hidden");
const overlayClose = document.querySelectorAll(".overlay-close");
const overlayCloseProjects = document.querySelectorAll(
  ".overlay-close-projects"
);
const skillsCards = document.querySelectorAll(".skills-card");
const projectOverlay = document.querySelectorAll(".project-overlay");

/* funtions */

const handleNav = function () {
  openNav.classList.toggle("fa-bars");
  openNav.classList.toggle("fa-times");
  if (!openNav.classList.contains("fa-bars")) {
    hiddenNav.style.display = "block";
    document.querySelector("body").style.display = "fixed";
    document.querySelector("body").style.overflowY = "hidden";
  } else {
    hiddenNav.style.display = "none";
    document.querySelector("body").style.display = "";
    document.querySelector("body").style.overflowY = "";
  }
};

function reveal() {
  let reveals = document.querySelectorAll(".section-fade");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

let openOverlay = function (element) {
  document.querySelector(`#overlay${element}`).classList.toggle("hidden");
  document.querySelector("body").style.display = "fixed";
  document.querySelector("body").style.overflowY = "hidden";
};

let closeOverlay = function (element) {
  document.querySelector(`#overlay${element}`).classList.toggle("hidden");
  document.querySelector("body").style.display = "";
  document.querySelector("body").style.overflowY = "";
};

/* calls */

hiddenNav.addEventListener("click", handleNav);

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    if ((hiddenNav.style.display = "block")) {
      hiddenNav.style.display = "none";
      if (openNav.classList.contains("fa-times")) {
        openNav.classList.toggle("fa-bars");
        openNav.classList.toggle("fa-times");
      }
    }
  }
});
openNav.addEventListener("click", handleNav);
window.addEventListener("scroll", reveal);

for (let i = 0; i < skillsCards.length; i++) {
  skillsCards[i].addEventListener("click", () =>
    openOverlay(skillsCards[i].id)
  );

  overlayClose[i].addEventListener("click", () =>
    closeOverlay(skillsCards[i].id)
  );
}

for (let i = 0; i < projectOverlay.length; i++) {
  projectOverlay[i].addEventListener("click", (e) => {
    e.preventDefault();
    openOverlay(projectOverlay[i].id);
  });

  overlayCloseProjects[i].addEventListener("click", () => {
    closeOverlay(projectOverlay[i].id);
  });
}
