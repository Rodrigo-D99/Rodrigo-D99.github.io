"use strict";

document.addEventListener('DOMContentLoaded',function menuOn(){
//navs
let main = document.querySelector("main");
let lista_nav =document.querySelector(".lista_nav");


//buttons




let menuBurger = document.querySelector(".btn_menu");
menuBurger.addEventListener("click", function () {
    if(perfil_nav.classList.contains("mostrar-menu-usuario")){
        perfil_nav.classList.toggle("mostrar-menu-usuario");
        menuPerfil.classList.toggle("cerrar-usuario");
    }
    else if(cart_box.classList.contains("mostrar-carrito")){
        cart_box.classList.toggle("mostrar-carrito");
        menuCart.classList.toggle("cerrar-usuario");
    }
   
    else{
        main.classList.toggle("segundo-plano");
    }
        lista_nav.classList.toggle("mostrar-categorias");
        menuBurger.classList.toggle("active");
});


let menuPerfil = document.querySelector(".btn_perfil");

let perfil_nav =document.querySelector(".perfil_nav");

menuPerfil.addEventListener("click", function () {
    if(lista_nav.classList.contains("mostrar-categorias") ){
        lista_nav.classList.toggle("mostrar-categorias");
        menuBurger.classList.toggle("active");
    }
    else if(cart_box.classList.contains("mostrar-carrito")){
        cart_box.classList.toggle("mostrar-carrito");
        menuCart.classList.toggle("cerrar-usuario");
    }


    else{
        main.classList.toggle("segundo-plano");
    }
    perfil_nav.classList.toggle("mostrar-menu-usuario");
    menuPerfil.classList.toggle("cerrar-usuario");

});

let menuCart = document.querySelector(".btn_cart");

let cart_box=document.querySelector(".cart-box");

menuCart.addEventListener("click", function () {
    if(lista_nav.classList.contains("mostrar-categorias") ){
        lista_nav.classList.toggle("mostrar-categorias");
        menuBurger.classList.toggle("active");
    }
    else if(perfil_nav.classList.contains("mostrar-menu-usuario")){
        perfil_nav.classList.toggle("mostrar-menu-usuario");
        menuPerfil.classList.toggle("cerrar-usuario");

    }
    else{
        main.classList.toggle("segundo-plano");
    }
    cart_box.classList.toggle("mostrar-carrito");
    menuCart.classList.toggle("cerrar-usuario");
});


});

