// ---------- Menu ---------- //

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menu.style.transition = "transform 0.3s ease";
    });
});

menu.addEventListener("transitionend", function(){
    this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
    arrow.addEventListener("click", function(){
        this.closest(".dropdown").classList.toggle("active");
    });
});

// ---------- Histoire timeline ---------- //

document.querySelectorAll('.timeline a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

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


