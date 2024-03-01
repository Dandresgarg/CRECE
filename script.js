//CARRUSEL
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    setInterval(nextSlide, 3000); // Cambia cada 3 segundos (ajusta según sea necesario)

    // Hacer que las funciones estén disponibles en el ámbito global
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
});