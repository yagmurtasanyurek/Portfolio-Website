"use strict";

const logo = document.querySelector(".logo");
const navLinks = document.querySelector(".main-nav-list");

const smoothScroll = function (e) {
  e.preventDefault();
  if (e.target.closest(".main-nav")) {
    const id = e.target.getAttribute("href");
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth" });
  }
};

logo.addEventListener("click", smoothScroll);
navLinks.addEventListener("click", smoothScroll);

///////////////////////////////////////////////////
//STICKY NAVIGATION
const nav = document.querySelector(".main-nav");
const hero = document.querySelector(".section-hero");
const header = document.querySelector(".header");
const projects = document.querySelector(".section-projects");
const navHeight = nav.getBoundingClientRect().height;
const headerHeight = header.getBoundingClientRect().height;
const spacer = document.querySelector(".spacer");
const html = document.documentElement;
console.log(html.style);

///
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const headerHeight = header.offsetHeight;

  // Dynamically add scroll-margin-top to sections
  document.querySelectorAll("section").forEach((section) => {
    section.style.setProperty("scroll-margin-top", `${headerHeight}px`);
  });
});

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    header.classList.add("sticky");
    /*   html.style.scrollPaddingTop = `${headerHeight}px`; */
  } else header.classList.remove("sticky");
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.1,
  rootMargin: `-${headerHeight}px`,
});

observer.observe(header);

// Add sticky class as soon as scrolling starts
/* window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
}); */

// scroll event
//bad performance cause scroll event fires all the time when were scrolling

/* const initialCoords = hero.getBoundingClientRect().top;
console.log(initialCoords);

window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) header.classList.add("sticky");
  else header.classList.remove("sticky");
}); */

///////////////////////////////////////////////////////////
//Reveal sections
/* const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

// ıf there was more than one section, i'd select them all and forEach section i'd observe it.

const sectionProject = document.querySelector(".section-projects");

sectionObserver.observe(sectionProject);
sectionProject.classList.add("section--hidden"); */
