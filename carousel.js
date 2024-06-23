// ---------- Carousel ---------- //

// scripts.js
const slideWidth = 350; // Define the width of each slide in pixels
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Loop back if the index is out of bounds
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Move the carousel-inner to show the selected slide
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    // Update the active class
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Initialize the carousel to show the first slide
showSlide(currentSlide);