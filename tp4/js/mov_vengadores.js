
const viewBox = document.querySelector('#columnaVengadores');
const vengadoresImagenes = document.querySelectorAll('.vengadores-mov');
const body = document.querySelector('body');

let xValue = 0,
    yValue = 0;

body.addEventListener("mousemove", (e) => {
    if(movimientoSegunLaPosDelMouse(viewBox, 0)){
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;
        vengadoresImagenes.forEach(img => {
            let speedX = img.dataset.speedx;
            let speedY = img.dataset.speedy;
            img.style.transform = 'translate(calc(-50% + ' + -xValue * speedX +  'px), calc(-50% + '+ -yValue * speedY +'px))';
        });
    }
});

function movimientoSegunLaPosDelMouse(elem, offset = 200) {
    var rect = elem.getBoundingClientRect();
    return (
      rect.top + offset <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= offset &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right >= 0
    );
}