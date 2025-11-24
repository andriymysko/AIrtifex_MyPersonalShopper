document.addEventListener('DOMContentLoaded', () => {
   
    // --- Menú Hamburguesa per Mòbil ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');


    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });


    // Tancar el menú quan es clica un enllaç
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });


    // --- Simulació d'enviament de formulari ---
    const form = document.getElementById('contactForm');
   
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la pàgina es recarregui realment
       
        const nom = form.querySelector('input[type="text"]').value;
       
        // Aquí normalment enviaries les dades a un servidor
        alert(`Gràcies ${nom}! He rebut la teva sol·licitud. Et contactaré aviat.`);
       
        form.reset();
    });


    // --- Scroll Suau (Opcional si el CSS no ho suporta en navegadors antics) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
