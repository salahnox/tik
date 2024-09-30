document.addEventListener('DOMContentLoaded', () => {
    const cube = document.querySelector('.cube');
    let rotationX = 0;
    let rotationY = 0;
    let isAnimationPaused = false;
    let lastTime = null;

    function animate(time) {
        if (lastTime !== null && !isAnimationPaused) {
            const delta = time - lastTime;
            rotationY = (rotationY - 0.05 * delta) % 360;
            rotationX = (rotationX - 0.03 * delta) % 360;
            cube.style.transform = `translateZ(-100px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        }
        lastTime = time;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    document.addEventListener('click', () => {
        isAnimationPaused = !isAnimationPaused;
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}































