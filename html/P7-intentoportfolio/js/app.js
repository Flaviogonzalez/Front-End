// Importar el complemento Observer de GSAP.
gsap.registerPlugin(Observer);

// Seleccionar elementos del DOM y almacenarlos en variables.
let sections = document.querySelectorAll("section"),
    images = document.querySelectorAll(".bg"),
    headings = gsap.utils.toArray(".section-heading"), // almacena todos los elementos con la clase .section-headings en una lista
    outerWrappers = gsap.utils.toArray(".outer"),
    innerWrappers = gsap.utils.toArray(".inner"),
    splitHeadings = headings.map(heading => new SplitText(heading, { type: "chars, words, lines", linesClass: "clip-text"})),
    currentIndex = -1,
    wrap = gsap.utils.wrap(0, sections.length - 1),
    animating;

// Configurar valores iniciales para los contenedores exteriores e interiores.
gsap.set(outerWrappers, { yPercent: 100 });
gsap.set(innerWrappers, { yPercent: -100 });

// Definir la función gotoSection para animar transiciones entre secciones.
function gotoSection(index, direction) {
    // Asegurar que el índice esté dentro del rango de secciones.
    index = wrap(index);
    
    // Establecer el estado de animación en "true".
    animating = true;
    // Determinar si se está desplazando hacia arriba o abajo.
    let fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        // Crear una línea de tiempo (timeline) de GSAP con configuraciones predeterminadas.
        tl = gsap.timeline({
            defaults: { duration: 1.25, ease: "power1.inOut" },
            onComplete: () => animating = false // Cambiar el estado de animación a "false" al completar la animación.
        });

    // Si hay una sección anteriormente activa.
    if (currentIndex >= 0) {
        // Cambiar la propiedad zIndex de la sección anterior.
        gsap.set(sections[currentIndex], { zIndex: 0 });
        // Animar la imagen actual fuera de la vista.
        tl.to(images[currentIndex], { yPercent: 50 * dFactor })
            .set(sections[currentIndex], { autoAlpha: 0 }); // Ocultar la sección actual.
    }
    // Mostrar la sección actual y cambiar su zIndex.
    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    // Animar los contenedores exteriores e interiores para mostrar la nueva sección.
    tl.fromTo([outerWrappers[index], innerWrappers[index]],
        { yPercent: i => i ? -100 * dFactor : 100 * dFactor },
        { yPercent: 0 },
        0)
    // Animar la imagen de fondo de la nueva sección.
    .fromTo(images[index], { yPercent: -50 * dFactor }, { yPercent: 0 }, 0)
    // Animar los caracteres del título de la nueva sección.
    .fromTo(splitHeadings[index].chars, {
        autoAlpha: 0,
        yPercent: 150 * dFactor
    }, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 1,
        easeinout: "power0",
        stagger: {
            each: 0.02,
            from: "random"
        }
    }, 0.2);
    
    // Actualizar el índice de la sección actual.
    currentIndex = index;
}

// Crear un observador de eventos para el desplazamiento y la interacción.
Observer.create({
    type: "wheel, touch, pointer", // Tipos de eventos observados.
    wheelSpeed: -1, // Invertir la dirección del desplazamiento de la rueda.
    onDown: () => !animating && gotoSection(currentIndex - 1, -1), // Acción al desplazarse hacia abajo.
    onUp: () => !animating && gotoSection(currentIndex + 1, 1), // Acción al desplazarse hacia arriba.
    tolerance: 10, // Tolerancia para detectar eventos.
    preventDefault: true // Prevenir el comportamiento predeterminado del evento.
});

// Iniciar la animación en la primera sección al cargar la página.
gotoSection(0, 1);