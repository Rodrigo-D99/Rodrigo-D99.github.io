"use strict";


document.querySelector(".btn-check").addEventListener("click", toggleCheckCaptcha);
function toggleCheckCaptcha() {
    document.querySelector(".done").classList.toggle("show");
}
document.querySelector("#goToRegistro").addEventListener("click", toggleRegistro);
function toggleRegistro() {
    document.querySelector(".registro").classList.toggle("mostrar");
    document.querySelector(".login").classList.toggle("esconder");
}
document.querySelector("#goToInicioSec").addEventListener("click", toggleIniciar);
function toggleIniciar() {
    document.querySelector(".registro").classList.toggle("esconder");
    document.querySelector(".login").classList.toggle("mostrar");
}