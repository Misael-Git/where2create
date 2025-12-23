export function initCarousel(carouselId) {
    const container = document.getElementById(carouselId);
    if (!container) return;

    const slides = container.querySelectorAll('.carousel-slide');
    const dotsContainer = container.querySelector('.carousel-nav');
    let currentIndex = 0;
    let intervalId;

    // Create dots if not manually created
    if (dotsContainer && dotsContainer.children.length === 0) {
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

    function updateClasses() {
        slides.forEach((slide, index) => {
            if (index === currentIndex) slide.classList.add('active');
            else slide.classList.remove('active');
        });

        if (dotsContainer) {
            const dots = dotsContainer.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => {
                if (index === currentIndex) dot.classList.add('active');
                else dot.classList.remove('active');
            });
        }
    }

    function goToSlide(index) {
        currentIndex = index;
        if (currentIndex >= slides.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = slides.length - 1;
        updateClasses();
        resetTimer();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function resetTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 5000); // 5 seconds
    }

    // Start auto play
    resetTimer();
}
