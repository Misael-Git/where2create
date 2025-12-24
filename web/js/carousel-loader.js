import { initCarousel } from './carousel.js';

const slidesData = [
    {
        id: 'thrills',
        title: 'Thrills & Rides',
        description: 'Gravity-defying concepts and innovative park designs.',
        image: '/img/kraken.webp',
        link: '/thrills/',
        bgClass: 'bg-black/40 backdrop-blur-md md:bg-black',
        btnClass: 'bg-corporate-blue text-white hover:bg-blue-600',
        order: 'md:flex-row'
    },
    {
        id: 'games',
        title: 'Games',
        description: 'Play directly in your browser. No downloads required.', // Color fixed in HTML template
        image: '/img/impostor.webp',
        link: '/games/',
        bgClass: 'bg-corporate-orange/40 backdrop-blur-md md:bg-corporate-orange',
        btnClass: 'bg-white text-corporate-orange hover:bg-gray-100',
        order: 'md:flex-row-reverse'
    },
    {
        id: 'apps',
        title: 'Apps Suite',
        description: 'Productivity software designed for the modern web.',
        image: '/img/apps.webp',
        link: '/apps/',
        bgClass: 'bg-corporate-blue/40 backdrop-blur-md md:bg-corporate-blue',
        btnClass: 'bg-white text-corporate-blue hover:bg-gray-100',
        order: 'md:flex-row'
    },
    {
        id: 'about',
        title: 'About',
        description: 'Discover the story and mission behind the project.',
        image: '/img/bebe.webp',
        link: '/about/',
        bgClass: 'bg-black/40 backdrop-blur-md md:bg-black',
        btnClass: 'bg-corporate-orange text-white hover:bg-red-600',
        order: 'md:flex-row-reverse'
    }
];

export function loadCarousel(placeholderId, currentPageId) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) return;

    // Filter out current page
    const filteredSlides = slidesData.filter(slide => slide.id !== currentPageId);
    if (filteredSlides.length === 0) return;

    const isHome = currentPageId === 'index' || currentPageId === '';

    // Create the "Discover More" title - Hidden on homepage
    const titleSection = isHome ? '' : `
        <div class="max-w-[1240px] mx-auto px-6 mb-8 mt-20">
            <h2 class="text-4xl font-medium">Discover <span class="text-corporate-blue">More</span></h2>
        </div>
    `;

    const carouselHTML = `
        <section class="w-full md:max-w-[1240px] md:mx-auto md:px-6 ${isHome ? 'mt-0 md:mt-8' : 'mt-0'} mb-0 md:mb-16">
            <div id="dynamic-carousel" class="relative overflow-hidden w-full h-[85vh] md:h-[480px] md:rounded-xl bg-black group">
                ${filteredSlides.map((slide, index) => `
                    <div class="carousel-slide ${index === 0 ? 'active opacity-100 z-10' : 'opacity-0 z-0'} absolute inset-0 flex flex-col ${slide.order} w-full h-full transition-opacity duration-700">
                        <div class="absolute inset-0 w-full h-full md:relative md:w-1/2 overflow-hidden">
                            <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" loading="${index === 0 ? 'eager' : 'lazy'}">
                        </div>
                        <div class="relative mt-auto h-[40%] md:h-full md:mt-0 md:w-1/2 ${slide.bgClass} flex flex-col justify-center items-start px-8 md:px-12 text-left carousel-overlay-fade">
                            <h2 class="text-white text-4xl font-medium mb-4">${slide.title}</h2>
                            <p class="${slide.id === 'games' ? 'text-white' : 'text-gray-200 md:text-gray-400'} text-lg mb-8 md:mb-12">${slide.description}</p>
                            <a href="${slide.link}" class="px-8 py-3 ${slide.btnClass} rounded font-medium transition-colors">Explore</a>
                        </div>
                    </div>
                `).join('')}

                <!-- Navigation Controls: Centered Square Buttons -->
                <button id="prev-btn" class="absolute top-1/2 -translate-y-1/2 left-0 w-12 h-12 bg-white/10 hover:bg-white/20 text-white z-30 transition-all focus:outline-none cursor-pointer flex items-center justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button id="next-btn" class="absolute top-1/2 -translate-y-1/2 right-0 w-12 h-12 bg-white/10 hover:bg-white/20 text-white z-30 transition-all focus:outline-none cursor-pointer flex items-center justify-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </section>
    `;

    placeholder.innerHTML = titleSection + carouselHTML;

    // Initialize the carousel logic
    initCarousel('dynamic-carousel');
}
