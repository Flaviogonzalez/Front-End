let suma1 = document.querySelector(".suma1");

let suma2 = document.querySelector(".suma2");

let resultado = document.querySelector(".resultado");

console.log(suma1.outerHTML);

resultado.textContent = 24 + 25;

// intento

const cambiarFondo = document.querySelector("#btn--submit");

document.querySelector("section").addEventListener("click", function(evento) {
    console.log(evento);
})