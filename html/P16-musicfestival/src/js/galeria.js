document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    navegacionFija();
    crearGaleria();
    scrollNav();
};

function navegacionFija() {
    const header = document.querySelector('header');
    const festival = document.querySelector('.sobre-festival');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function() {
        if (festival.getBoundingClientRect().bottom < 0) { // si pasamos el elemento, el metodo retorna atributos del scroll y la posicion del elemento
            header.classList.add('fijar');
            body.classList.add('body-scroll');
        } else {
            header.classList.remove('fijar');
            body.classList.remove('body-scroll');
        }
    })
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: "smooth",
            });
        })
    });
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture'); // lo que sigue despues de este codigo es GODIANO, basicamente es react pero en javascript vanilla

        imagen.innerHTML = ` 
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" src="build/img/thumb/${i}.jpg" alt="imagen galería">
        `;

        imagen.onclick = function() {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
};


// ventana modal
function mostrarImagen(id) {
    const imagen = document.createElement('picture');

    imagen.innerHTML = ` 
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" src="build/img/grande/${id}.jpg" alt="imagen galería">
    `;

    // generando el overlay
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }


    // boton
    const cerrar = document.createElement('p');
    cerrar.textContent = "X";
    cerrar.classList.add('Boton-cerrar');
    overlay.appendChild(cerrar);
    cerrar.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    // body
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}