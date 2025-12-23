export function loadHeader(currentPage) {
    const headerHTML = `
        <div class="max-w-[1200px] mx-auto px-6 flex justify-between items-center h-full">
            <a href="index.html" class="flex items-center gap-2 h-full py-1">
                <img src="img/logo.png" alt="Logo" class="h-8 w-auto object-contain" onerror="this.onerror=null; this.src=''; this.innerHTML='<span class=\'font-bold text-lg text-white\'>PROJECT<span class=\'text-corporate-blue\'>WEB</span></span>';">
            </a>
            <nav class="h-full">
                <ul class="flex h-full items-center gap-0">
                    <li><a href="index.html" data-page="index" class="h-full flex items-center px-5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Home</a></li>
                    <li><a href="thrills.html" data-page="thrills" class="h-full flex items-center px-5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Thrills</a></li>
                    <li><a href="music.html" data-page="music" class="h-full flex items-center px-5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Music</a></li>
                    <li><a href="games.html" data-page="games" class="h-full flex items-center px-5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Games</a></li>
                    <li><a href="apps.html" data-page="apps" class="h-full flex items-center px-5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Apps</a></li>
                    <li><a href="about.html" data-page="about" class="h-full flex items-center px-5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Sobre Mí</a></li>
                    <li><a href="contact.html" data-page="contact" class="h-full flex items-center px-5 text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Contacto</a></li>
                </ul>
            </nav>
        </div>
    `;

    const headerElement = document.createElement('header');
    headerElement.className = "sticky top-0 z-50 bg-black h-[50px] w-full border-b border-gray-900"; // Specific height definition
    headerElement.innerHTML = headerHTML;

    let target = document.body;
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
        placeholder.appendChild(headerElement);
    } else {
        document.body.prepend(headerElement);
    }

    const navLinks = headerElement.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.remove('text-gray-400', 'hover:bg-white/5');
            link.classList.add('bg-corporate-blue', 'text-white');
        }
    });
}
