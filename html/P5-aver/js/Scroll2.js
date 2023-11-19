// JavaScript para Scroll Suave Continuo con Rueda del Mouse
let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
let targetScroll = currentScroll;

function handleScroll(event) {
  targetScroll += event.deltaY;
  event.preventDefault();
}

function smoothScroll() {
  const smoothness = 0.05; // Ajusta la suavidad del scroll
  currentScroll += (targetScroll - currentScroll) * smoothness;
  document.documentElement.scrollTop = currentScroll;

  requestAnimationFrame(smoothScroll);
}

window.addEventListener('wheel', handleScroll);
smoothScroll();