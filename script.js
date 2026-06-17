// Esperar a que el HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('#nav-links a');

    // Al hacer clic en el botón hamburguesa
    btnMenu.addEventListener('click', () => {
        btnMenu.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Cerrar el menú automáticamente cuando se hace clic en cualquier enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            btnMenu.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });
});