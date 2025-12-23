export function loadHeader(currentPage) {
    const headerHTML = `
        <div class="container header-inner">
            <a href="index.html" class="logo">
                <img src="img/logo.png" alt="Logo" onerror="this.onerror=null; this.src=''; this.innerHTML='<span style=\'color:white;\'>LOGO</span>';">
                <!-- If img fails, simple text fallback might not show without styling adjustments, but user asked for img -->
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

    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
        placeholder.appendChild(headerElement);
    } else {
        document.body.prepend(headerElement);
    }

    const navLinks = headerElement.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        }
    });
}
