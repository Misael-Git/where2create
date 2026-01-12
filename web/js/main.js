document.addEventListener('DOMContentLoaded', () => {
    const bodyPage = document.body.getAttribute('data-page');
    const pageTitle = document.title;

    // Header/Footer Initialization
    if (window.loadHeader) window.loadHeader(bodyPage);
    if (window.loadFooter) window.loadFooter();

    // Discovery (Carousel) Initialization
    const carouselPlaceholder = document.getElementById('carousel-placeholder');
    if (carouselPlaceholder && window.loadCarousel) {
        // Pass current page name to filter it out from discovery
        let currentProject = "";
        if (pageTitle.includes("Kraken")) currentProject = "Kraken";
        if (pageTitle.includes("Mermaid")) currentProject = "Mermaid";
        if (pageTitle.includes("Impostor")) currentProject = "Impostor";

        window.loadCarousel('carousel-placeholder', currentProject);
    }

    // Accordion Initialization
    if (window.initAccordion) window.initAccordion();
});
