let cart= document.querySelectorAll('.cart').forEach(boton => {
    boton.addEventListener("click", addToCart)
    });


function addToCart() {
    console.log(this);
    this.classList.toggle("added");
}