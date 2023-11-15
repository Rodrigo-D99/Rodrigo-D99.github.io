let load_bar= document.querySelector('.load_bar');
let loading_bar= document.querySelector('.loading_bar');
let loaded= document.querySelector('.load_bar p');
let loaded_n= 0;
let to= false;
let t= null;
let sto;
let loading;

console.log(loaded);

loaded.innerHTML= '0%'
showLoad();

function showLoad(tt = 5) {
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
        loading_bar.style.width= loaded_n + '%'
    } else {
        document.querySelector('#load').style.display= 'none';
        clearInterval(loading);
        clearTimeout(sto);
    }
}