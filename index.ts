// =============================================
// DYNAMIC LOGO
// =============================================

const logoImgTag: HTMLImageElement = document.querySelector(".logo img")!;
const logoIcon = "./assets/icons/logo-icon-black-rounded-corners.svg";
const logoFull = "./assets/icons/logo-full-black-rounded-corners.svg";

window.addEventListener("load", () => {
  if (window.innerWidth >= 1225) {
    logoImgTag.src = logoFull;
  } else {
    logoImgTag.src = logoIcon;
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1225) {
    logoImgTag.src = logoFull;
  } else {
    logoImgTag.src = logoIcon;
  }
});

// =============================================
// MENU TOGGLE
// =============================================

const menu: HTMLDivElement = document.querySelector(".menu")!;
const nav: HTMLElement = document.querySelector("nav")!;

menu.addEventListener("click", () => {
  nav.classList.toggle("show");
});
