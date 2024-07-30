let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Récupérer la largeur actuelle d'un slide
    const carousel = document.querySelector('.carousel');
    const carouselWidth = carousel.offsetWidth;

    if (carouselWidth === 1120) {
        slideWidth = 1120;
    } else if (carouselWidth === 900) {
        slideWidth = 900;
    } else if (carouselWidth === 700){
        slideWidth = 700;
    } else if (carouselWidth === 600) {
        slideWidth = 600;
    } else if (carouselWidth ===400){
        slideWidth = 400;
    } else {
        slideWidth = 300;
    }
console.log(slideWidth)
    // Boucle retour si l'index est hors limites
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Déplacer le carousel-inner pour montrer le slide sélectionné
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;


    // Mettre à jour la classe active
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Initialiser le carousel pour montrer le premier slide
window.addEventListener('resize', () => showSlide(currentSlide));
showSlide(currentSlide);