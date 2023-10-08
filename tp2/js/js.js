"use strict";
//Menu Responsive
let burger = document.querySelector(".btn_menu");
burger.addEventListener("click", () =>
burger.classList.toggle("active"));

burger.addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".lista_nav").classList.toggle("show");
}

let perfil = document.querySelector(".btn_perfil").addEventListener("click", toggleMenuPerfil);
function toggleMenuPerfil() {
    document.querySelector(".perfil_nav").classList.toggle("show");
}
let cart = document.querySelector(".btn_cart").addEventListener("click", toggleMenuCart);
function toggleMenuCart() {
    document.querySelector(".cart-box").classList.toggle("show");
}