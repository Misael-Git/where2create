export function initCarousel(carouselId) {
    const container = document.getElementById(carouselId);
    if (!container) return;

    const slides = container.querySelectorAll('.carousel-slide');
    const dotsContainer = container.querySelector('.carousel-nav');
    const prevBtn = container.querySelector('#prev-btn');
    const nextBtn = container.querySelector('#next-btn');

    let currentIndex = 0;
    let intervalId;

    // Create dots if not manually created
    if (dotsContainer && dotsContainer.children.length === 0) {
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'w-3 h-3 rounded-full bg-white/30 cursor-pointer hover:bg-white transition-colors';
            if (index === 0) dot.classList.replace('bg-white/30', 'bg-white');

            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

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

        if (dotsContainer) {
            const dots = dotsContainer.querySelectorAll('div');
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.replace('bg-white/30', 'bg-white');
                } else {
                    dot.classList.replace('bg-white', 'bg-white/30');
                }
            });
        }
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
