function initAccordion(selector) {
    const accordions = document.querySelectorAll(selector);
    accordions.forEach(acc => {
        const header = acc.querySelector('.accordion-header');
        const content = acc.querySelector('.accordion-content');
        if (header && content) {
            header.addEventListener('click', () => {
                const isOpen = !content.classList.contains('hidden');
                document.querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden'));
                if (!isOpen) content.classList.remove('hidden');
            });
        }
    });
}
window.initAccordion = initAccordion;
