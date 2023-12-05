document.addEventListener('DOMContentLoaded',function menuOn(){
    const HOME_URL = "https://rodrigo-d99.github.io/tp4/inicio.html"
    setTimeout(() => {
        location.href = HOME_URL;
    }, 2500);
});

let loaded= document.querySelector(".loading");
let to= false;
let loaded_n= 0;

loaded.innerHTML= '0%';
showLoad();

function showLoad(tt = 2.5) {
    t= tt*1000;
    loading= setInterval(load, (t/20));
    sto= setTimeout(timeOut, t);
}


function timeOut() {
    to= true;
    return;
}

function load() {
    if (to == false) {
        console.log("cargando");
        loaded_n+= (100/20);
        loaded.innerHTML= loaded_n + '%'
    } else {
        clearInterval(loading);
        clearTimeout(sto);
    }
}