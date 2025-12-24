import { loadHeader } from './header.js';
import { loadFooter } from './footer.js';
import { loadCarousel } from './carousel-loader.js';
import { initAccordion } from './accordion.js';

document.addEventListener('DOMContentLoaded', () => {
    const bodyPage = document.body.getAttribute('data-page') || 'index';

    // Load Core
    loadHeader(bodyPage);
    loadFooter();

    // Load Carousel (Everywhere)
    // For homepage 'index', we might not want to filter out anything, or maybe we do.
    // The user said "without the section of the page it's on", so for home, let's show all.
    loadCarousel('carousel-placeholder', bodyPage === 'index' ? '' : bodyPage);

    // Init Page Specifics
    if (bodyPage === 'contact') {
        initAccordion('.faq-accordion');
    }
});
