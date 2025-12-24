export function loadHeader(currentPage) {
    const headerHTML = `
        <div class="max-w-[1200px] mx-auto px-6 grid grid-cols-3 items-center h-full relative">
            
            <!-- Logo (Left) -->
            <div class="flex justify-start">
                <a href="index.html" class="flex items-center gap-2 h-full py-1 z-50">
                    <img src="img/logo.png" alt="Logo" class="h-8 w-auto object-contain" onerror="this.onerror=null; this.src=''; this.innerHTML='<span class=\'font-bold text-lg text-white\'>PROJECT<span class=\'text-corporate-blue\'>WEB</span></span>';">
                </a>
            </div>

            <!-- Desktop Nav (Center) -->
            <nav class="hidden md:flex justify-center h-full">
                <ul class="flex h-full items-center gap-0">
                    <li><a href="index.html" data-page="index" class="h-full flex items-center px-5 text-[12px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Home</a></li>
                    <li><a href="thrills.html" data-page="thrills" class="h-full flex items-center px-5 text-[12px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Thrills</a></li>
                    <li><a href="games.html" data-page="games" class="h-full flex items-center px-5 text-[12px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Games</a></li>
                    <li><a href="apps.html" data-page="apps" class="h-full flex items-center px-5 text-[12px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Apps</a></li>
                    <li><a href="about.html" data-page="about" class="h-full flex items-center px-5 text-[12px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">About Me</a></li>
                    <li><a href="contact.html" data-page="contact" class="h-full flex items-center px-5 text-[12px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Contact</a></li>
                </ul>
            </nav>

            <!-- Mobile Hamburger Button (Right) -->
            <div class="flex justify-end md:hidden">
                <button id="mobile-menu-btn" class="text-white z-50 relative focus:outline-none">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path class="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        <path class="close-icon hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu-overlay" class="fixed inset-0 bg-black/95 backdrop-blur-sm z-40 hidden flex flex-col items-center justify-center transition-opacity duration-300">
            <nav class="flex flex-col items-center gap-8">
                <a href="index.html" class="text-2xl font-medium text-white hover:text-corporate-blue transition-colors">Home</a>
                <a href="thrills.html" class="text-2xl font-medium text-white hover:text-corporate-blue transition-colors">Thrills</a>
                <a href="games.html" class="text-2xl font-medium text-white hover:text-corporate-blue transition-colors">Games</a>
                <a href="apps.html" class="text-2xl font-medium text-white hover:text-corporate-blue transition-colors">Apps</a>
                <a href="about.html" class="text-2xl font-medium text-white hover:text-corporate-blue transition-colors">About Me</a>
                <a href="contact.html" class="text-2xl font-medium text-white hover:text-corporate-blue transition-colors">Contact</a>
            </nav>
        </div>
    `;

    const headerElement = document.createElement('header');
    headerElement.className = "sticky top-0 z-50 bg-black h-[50px] w-full border-b border-gray-900";
    headerElement.innerHTML = headerHTML;

    // Insertion Logic
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
        placeholder.replaceWith(headerElement);
    } else {
        const existingHeader = document.querySelector('header');
        if (existingHeader) existingHeader.remove();
        document.body.prepend(headerElement);
    }

    // Active Link Logic
    const navLinks = headerElement.querySelectorAll('nav.hidden a'); // Select only Desktop nav links for specific desktop styling
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (link.dataset.page === currentPage || (href && href.includes(currentPage + '.html'))) {
            // Desktop: Blue BG, White Text
            link.classList.remove('text-gray-400', 'hover:bg-white/5');
            link.classList.add('bg-corporate-blue', 'text-white');
        }
    });

    // Mobile Active Logic (just color)
    const mobileLinks = headerElement.querySelectorAll('#mobile-menu-overlay a');
    mobileLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage + '.html')) {
            link.classList.add('text-corporate-blue');
        }
    });

    // Mobile Menu Logic
    const btn = headerElement.querySelector('#mobile-menu-btn');
    const overlay = headerElement.querySelector('#mobile-menu-overlay');
    const menuIcon = btn.querySelector('.menu-icon');
    const closeIcon = btn.querySelector('.close-icon');

    btn.addEventListener('click', () => {
        const isHidden = overlay.classList.contains('hidden');
        if (isHidden) {
            overlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            overlay.classList.add('hidden');
            document.body.style.overflow = '';
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    });
}
