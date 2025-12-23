import { loadHeader } from './header.js';
import { loadFooter } from './footer.js';
import { initCarousel } from './carousel.js';
import { initAccordion } from './accordion.js';

document.addEventListener('DOMContentLoaded', () => {
    const bodyPage = document.body.getAttribute('data-page') || 'index';

    // Load Core
    loadHeader(bodyPage);
    loadFooter();

    // Init Page Specifics
    if (bodyPage === 'index') {
        initCarousel('home-carousel');
    }
    if (bodyPage === 'contact') {
        initAccordion('.faq-accordion');
    }
});
