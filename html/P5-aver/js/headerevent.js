let flecha_gris = document.querySelector('.flecha-gris'); 

flecha_gris.addEventListener('click', function() {

    let siguienteSeccion = flecha_gris.parentElement.nextElementSibling;

    if (siguienteSeccion) {
        siguienteSeccion.scrollIntoView({
             behavior: 'smooth',
             block: 'start'
            });
    }

    console.log("clickearon la flecha gris maldita sea")
});


// controla el h1 de la seccion 2

// Selecciona el elemento que muestra el desplazamiento
let showscrollElement = document.getElementById('showscroll');

// Agrega un evento de desplazamiento a la ventana
window.addEventListener('scroll', function() {
    // Obtiene el valor de desplazamiento actual en píxeles
    let scrollValue = window.scrollY;
    
    // Actualiza el contenido del elemento para mostrar el nuevo valor
    showscrollElement.textContent = 'scroll = ' + scrollValue + 'px';
});