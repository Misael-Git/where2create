/**
 * Renders the Header component into the DOM.
 * @param {string} currentPage - The filename of the current page (e.g., 'index', 'thrills') to set active state.
 */
export function loadHeader(currentPage) {
    const headerHTML = `
        <div class="container header-inner">
            <a href="index.html" class="logo">
                <span style="color: black;">PROJECT</span><span>WEB</span>
            </a>
            <nav>
                <ul>
                    <li><a href="index.html" data-page="index">Home</a></li>
                    <li><a href="thrills.html" data-page="thrills">Thrills</a></li>
                    <li><a href="music.html" data-page="music">Music</a></li>
                    <li><a href="games.html" data-page="games">Games</a></li>
                    <li><a href="apps.html" data-page="apps">Apps</a></li>
                    <li><a href="about.html" data-page="about">Sobre Mí</a></li>
                    <li><a href="contact.html" data-page="contact">Contacto</a></li>
                </ul>
            </nav>
        </div>
    `;

    const headerElement = document.createElement('header');
    headerElement.innerHTML = headerHTML;

    // Insert header at the top of the body or into a placeholder
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
        placeholder.appendChild(headerElement);
    } else {
        document.body.prepend(headerElement);
    }

    // Set Active State
    const navLinks = headerElement.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        }
    });
}
