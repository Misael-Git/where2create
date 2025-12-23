/**
 * Renders the Footer component into the DOM.
 */
export function loadFooter() {
    const footerHTML = `
        <div class="container">
            <div class="footer-inner">
                <div class="footer-col" style="flex: 2;">
                    <h4>PROJECT <span style="color: var(--color-corporate-blue);">WEB</span></h4>
                    <p style="max-width: 300px; font-size: 14px; color: #9AA0A6;">
                        Innovating digital experiences with a clean, commercial aesthetic. 
                        Bringing together thrills, music, and technology.
                    </p>
                </div>
                <div class="footer-col">
                    <h4>Discover</h4>
                    <ul>
                        <li><a href="thrills.html">Thrills</a></li>
                        <li><a href="music.html">Music</a></li>
                        <li><a href="games.html">Games</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="about.html">Sobre Mí</a></li>
                        <li><a href="contact.html">Contacto</a></li>
                        <li><a href="apps.html">Apps</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <span>&copy; 2025 Project Web. All rights reserved.</span>
                <div style="display: flex; gap: 24px;">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </div>
    `;

    const footerElement = document.createElement('footer');
    footerElement.innerHTML = footerHTML;

    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.appendChild(footerElement);
    } else {
        document.body.appendChild(footerElement);
    }
}
