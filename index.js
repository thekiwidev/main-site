// =============================================
// DYNAMIC LOGO
// =============================================
var logoImgTag = document.querySelector(".logo img");
var logoIcon = "./assets/icons/logo-icon-black-rounded-corners.svg";
var logoFull = "./assets/icons/logo-full-black-rounded-corners.svg";
window.addEventListener("load", function () {
    if (window.innerWidth >= 1225) {
        logoImgTag.src = logoFull;
    }
    else {
        logoImgTag.src = logoIcon;
    }
});
window.addEventListener("resize", function () {
    if (window.innerWidth >= 1225) {
        logoImgTag.src = logoFull;
    }
    else {
        logoImgTag.src = logoIcon;
    }
});
// =============================================
// MENU TOGGLE
// =============================================
var menu = document.querySelector(".menu");
var nav = document.querySelector("nav");
var menuText = menu.querySelector(".text");
menu.addEventListener("click", function () {
    nav.classList.toggle("show");
    nav.classList.contains("show")
        ? (menuText.innerHTML = "close")
        : (menuText.innerHTML = "menu");
});
