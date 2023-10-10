"use strict";

let cardsCount = document.getElementsByClassName('cardM1').length;
/* let buttons = document.getElementsByClassName('btn_container'); */


let carousels= [];
cardsCount= cardsCount - 0; //                                                          las que puse para ver fuera del carro
let cardWidth= 230;
let cardsPerPage = 2;
let currentPosition = cardsPerPage;
let currentMargin = 0;
/* let containerWidth = container.offsetWidth; */


document.querySelectorAll('.carousel').forEach(boton => {
    boton.addEventListener("click", addCarousel(boton));
    });

document.querySelectorAll('.btn_container').forEach(boton => {
    boton.addEventListener("click", function() {if (boton.childNodes[0].classList[0] == 'btn_prev') {carouselLeft(boton);} 
                                                else if (boton.childNodes[0].classList[0] == 'btn_next') {carouselRight(boton);}});
    });



window.addEventListener("resize", checkWidth);

function checkWidth() {
    setParams(document.querySelector('.carousel_container').offsetWidth);       // chequea del primero porque justo son todos del mismo tamaño
}

function addCarousel (c, n= c.parentNode.offsetWidth) {                 //hacer funcion que actualize el containerwidth de cada array
    let new_array = {
        "id": c.id,
        "carousel": c,
        "cardWidth": cardWidth,
        "cardsPerPage": cardsPerPage,
        "cardsCount": c.childNodes.length/2 - 0.5,                  //por alguna razon siempre suma 0.5
        "currentPosition": currentPosition,
        "currentMargin": 0,
        "containerWidth": n
    }
    carousels.push(new_array);

}


function setParams(w) {

    if (w >= 6*cardWidth) {
        cardsPerPage= 6;
    } else if ( w >= 4*cardWidth) {
        cardsPerPage= 4;
    } else if (w >= 2*cardWidth) {
        cardsPerPage= 2;
    }

    for(let i=0;i<carousels.length;i++) {
        if (carousels[i].cardsPerPage != cardsPerPage) {
            carousels[i].containerWidth= w;
            carousels[i].cardsPerPage= cardsPerPage;
            carousels[i].currentPosition= cardsPerPage;
            carousels[i].carousel.style.marginLeft= 0 + 'px';
            carousels[i].currentMargin= 0;
            carouselLeft(carousels[i].carousel.parentNode.parentNode.childNodes[1]);  //reinicia el carousel
        }  
    }
    

}

checkWidth();

function searchCarousel(id) {
    for(let i=0; i<carousels.length;i++) {
        if (carousels[i].id == id) {
            return carousels[i];
        }
    }
}

function carouselLeft(b) {
    let c= searchCarousel(b.parentNode.childNodes[3].childNodes[1].id);
    if (c.currentPosition != c.cardsPerPage) { 
        c.carousel.style.marginLeft = c.currentMargin + (c.cardWidth * c.cardsPerPage) + 'px';
        c.currentMargin += (c.cardWidth * c.cardsPerPage);
        c.currentPosition= c.currentPosition -c.cardsPerPage;
    };
    if (c.currentPosition <= c.cardsPerPage) {
        b.parentNode.childNodes[1].classList.remove('on');
    }
    if (c.currentPosition < c.cardsCount) {
        b.parentNode.childNodes[5].classList.add('on');
    }
};

function carouselRight(b) {
    let c= searchCarousel(b.parentNode.childNodes[3].childNodes[1].id);
    if (c.currentPosition < c.cardsCount) {     //!=
        c.carousel.style.marginLeft = c.currentMargin - (c.cardWidth * c.cardsPerPage) + 'px';  // 1150px pc
        c.currentMargin -= (c.cardWidth * c.cardsPerPage);
        c.currentPosition= c.currentPosition +c.cardsPerPage;
    };
    if (c.currentPosition >= c.cardsCount) {
        b.parentNode.childNodes[5].classList.remove('on');
    }
    if (c.currentPosition > 0) {
        b.parentNode.childNodes[1].classList.add('on');
    }
};