export function initCarousel(carouselId) {
    const container = document.getElementById(carouselId);
    if (!container) return;

    const slides = container.querySelectorAll('.carousel-slide');
    const dotsContainer = container.querySelector('.carousel-nav');
    const prevBtn = container.querySelector('#prev-btn');
    const nextBtn = container.querySelector('#next-btn');

    let currentIndex = 0;
    let intervalId;

    // Button Listeners
    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    function updateClasses() {
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.classList.add('active');
                slide.classList.remove('opacity-0', 'z-0');
                slide.classList.add('opacity-100', 'z-10');
            } else {
                slide.classList.remove('active');
                slide.classList.add('opacity-0', 'z-0');
                slide.classList.remove('opacity-100', 'z-10');
            }
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        if (currentIndex >= slides.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = slides.length - 1;
        updateClasses();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function resetTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 6000); // 6 seconds
    }

    // Start auto play
    // Initial class setup is handled by HTML 'active' class on first element for LCP
    slides[0].classList.add('active', 'opacity-100', 'z-10');
    resetTimer();
}
