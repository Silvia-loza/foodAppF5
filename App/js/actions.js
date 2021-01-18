'use strict'
//alert("javascript conectado!")

function showScreenOne() {
    const screenOne = document.querySelector("#screenOne");

    if (screenOne.style.display != "none") {
        console.log("if primero");
        screenOne.style.display = "none";

    } else {
        screenOne.style.display = "block";
    }

}

function showScreenTwo() {
    const screenTwo = document.querySelector("#screenTwo");

    if (screenTwo.style.display == "block") {
        screenTwo.style.display = "none";
    } else {
        screenTwo.style.display = "block";

    };
}

function screenChooser() {
    showScreenOne();
    showScreenTwo();
    console.log("estoy en la función de elegir pantalla!")
}




const botonState = document.querySelector(".botonCarrito");
botonState.addEventListener("click", screenChooser);
const botonBack = document.querySelector(".botonBack");
botonBack.addEventListener("click", screenChooser);

function addToBasket() {

}