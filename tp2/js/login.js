"use strict";


document.querySelectorAll(".btn-check").forEach(Check=>{Check.addEventListener("click", toggleCheckCaptcha)});
function toggleCheckCaptcha() {
    document.querySelectorAll(".done").forEach(Check=>{Check.classList.toggle("show")});
}

document.querySelector(".btn-check2").addEventListener("click", toggleCheck);
function toggleCheck() {
    document.querySelector(".done2").classList.toggle("show");
}

document.querySelector("#goToRegistro").addEventListener("click", toggleRegistro);
function toggleRegistro() {
    document.querySelector(".registro").style.display="flex";
    document.querySelector(".login").style.display="none";
}
document.querySelector("#goToInicioSec").addEventListener("click", toggleIniciar);
function toggleIniciar() {
    document.querySelector(".registro").style.display="none";
    document.querySelector(".login").style.display="flex";
}