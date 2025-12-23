import { loadHeader } from './header.js';
import { loadFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
    // Determine current page from body data-attribute or URL
    // We will assume the body has a data-page attribute for simplicity in this static setup
    const bodyPage = document.body.getAttribute('data-page') || 'index';

    loadHeader(bodyPage);
    loadFooter();
});
