"use strict";
//Menu Responsive
let burger = document.querySelector(".btn_menu");

burger.addEventListener("click", () =>
    burger.classList.toggle("active"));

document.querySelector(".btn_menu").addEventListener("click", toggleMenu);