// While hover on the button carousel pause
const myCarouselElement = document.querySelector('#header-carousel');
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 5000,
    touch: false,
    pause: false // Pause the carousel on hover
});
const carouselControls = myCarouselElement.querySelectorAll('.carousel-control-stop');

carouselControls.forEach(control => {
    control.addEventListener('mouseenter', () => {
        carousel.pause(); // Pause the carousel when hovering over control buttons
    });

    control.addEventListener('mouseleave', () => {
        carousel.cycle(); // Resume carousel when mouse leaves control buttons
    });
});