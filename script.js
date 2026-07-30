// ===== MENÚ MÓVIL (hamburguesa) =====
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.main-nav ul');

navToggle.addEventListener('click', () => {
    const abierto = navList.classList.toggle('abierto');
    navToggle.setAttribute('aria-expanded', abierto);
});

navList.querySelectorAll('a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        navList.classList.remove('abierto');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// ===== ANIMACIÓN AL HACER SCROLL =====
const opciones = {
    threshold: 0.15
};

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target);
        }
    });
}, opciones);

document.querySelectorAll('main section').forEach(seccion => {
    observador.observe(seccion);
});