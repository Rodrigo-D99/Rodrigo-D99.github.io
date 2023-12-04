let menuBtn = document.querySelector(".btn-menu");
let opcionesMenu = document.querySelectorAll(".menu-btn");

menuBtn.addEventListener("click", function(){
  menuBtn.classList.toggle('active');
  menuBtn.classList.toggle('inactive');

  for (let index = 0; index < opcionesMenu.length; index++) {
    opcionesMenu[index].classList.toggle("desplegar-menu-btn");
  }
  for (let index = 0; index < opcionesMenu.length; index++) {
    opcionesMenu[index].style.transition = `all ${0.2 + index / 7}s ease-in-out`;
    opcionesMenu[index].style.top = `${105 + index * 56.25}px`;
  }
  setTimeout(() => {
    newTransition();
  }, 700);
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let imgCont = document.querySelector(".titulo-container");
    let headerCont = document.querySelector("#h-container");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerCont.style.padding = "5px 50px 15px 50px";
    imgCont.style.top = "8px";
    imgCont.style.height = "69px";
    imgCont.style.width = "135px";
  } else {
    headerCont.style.padding = "15px 50px";
    imgCont.style.top = "100%";
    imgCont.style.height = "301px";
    imgCont.style.width = "590px";
  }
}




function newTransition() {
  for (let index = 0; index < opcionesMenu.length; index++) {
    opcionesMenu[index].style.transition = `all ${0.2}s ease-in-out`;
  }
}


let data = window.performance.getEntriesByType("navigation")[0].type;
if(data == "reload"){
  const HOME_URL = "https://rodrigo-d99.github.io/tp4/inicio.html"
  location.href = HOME_URL;
}