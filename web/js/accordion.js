export function initAccordion(accordionSelector) {
    const items = document.querySelectorAll(accordionSelector + ' .accordion-item');

    items.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            // Toggle current
            const isActive = item.classList.contains('active');

            // Close others (optional - can render as multiple open allowed)
            // items.forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
}
