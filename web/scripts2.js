let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicators input');

// Function to move to the next slide
function moveSlide(direction) {
    const totalSlides = slides.length;

    // Remove active, next, and prev classes from all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.classList.remove('next');
        slide.classList.remove('prev');
    });

    // Calculate the new index
    let newIndex = (currentIndex + direction + totalSlides) % totalSlides;

    // Set the current slide as active
    slides[newIndex].classList.add('active');

    // Set the next slide to move in from the right
    slides[(newIndex + 1) % totalSlides].classList.add('next');

    // Set the previous slide to slide out to the left
    slides[(newIndex - 1 + totalSlides) % totalSlides].classList.add('prev');

    // Update the current index
    currentIndex = newIndex;

    // Update indicators
    indicators[currentIndex].checked = true;
}

// Function to go to a specific slide when an indicator is clicked
function goToSlide(index) {
    if (index === currentIndex) return;

    const totalSlides = slides.length;

    // Remove active, next, and prev classes from all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.classList.remove('next');
        slide.classList.remove('prev');
    });

    // Update the current index
    currentIndex = index;

    // Set the current slide as active
    slides[currentIndex].classList.add('active');

    // Set the next slide to move in from the right
    slides[(currentIndex + 1) % totalSlides].classList.add('next');

    // Set the previous slide to slide out to the left
    slides[(currentIndex - 1 + totalSlides) % totalSlides].classList.add('prev');

    // Update indicators
    indicators[currentIndex].checked = true;
}

// Autoplay function to slide every 3 seconds
let autoplayInterval = setInterval(() => {
    moveSlide(1); // Automatically move to the next slide
}, 3000);

// Initialize the first slide as active
slides[currentIndex].classList.add('active');
indicators[currentIndex].checked = true;

// Pause autoplay on hover
const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval); // Stop the autoplay
});

// Resume autoplay when mouse leaves the carousel
carouselContainer.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(() => {
        moveSlide(1); // Automatically move to the next slide
    }, 3000); // Restart autoplay
});
