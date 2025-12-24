export function loadHeader(currentPage) {
    const headerHTML = `
        <div class="max-w-[1200px] mx-auto px-6 grid grid-cols-3 items-center h-full relative">
            
            <!-- Logo (Left) -->
            <div class="flex justify-start">
                <a href="/" class="flex items-center gap-2 h-full py-1 z-50">
                    <img src="/img/LOGO.png" alt="Logo" class="h-8 w-auto object-contain" onerror="this.onerror=null; this.src=''; this.innerHTML='<span class=\'font-bold text-lg text-white\'><span class=\'text-corporate-blue\'>W2C</span></span>';">
                </a>
            </div>

            <!-- Desktop Nav (Center) -->
            <nav class="hidden md:flex justify-center h-full">
                <ul class="flex h-full items-center gap-0">
                    <li><a href="/" data-page="index" class="h-full flex items-center px-5 text-[12px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Home</a></li>
                    <li><a href="/thrills/" data-page="thrills" class="h-full flex items-center px-5 text-[12px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Thrills</a></li>
                    <li><a href="/games/" data-page="games" class="h-full flex items-center px-5 text-[12px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Games</a></li>
                    <li><a href="/apps/" data-page="apps" class="h-full flex items-center px-5 text-[12px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Apps</a></li>
                    <li><a href="/about/" data-page="about" class="h-full flex items-center px-5 text-[12px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">About</a></li>
                    <li><a href="/contact/" data-page="contact" class="h-full flex items-center px-5 text-[12px] font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">Contact</a></li>
                </ul>
            </nav>

            <!-- Mobile Hamburger Button (Right) -->
            <div class="col-start-3 flex justify-end md:hidden">
                <button id="mobile-menu-btn" class="text-white z-50 relative focus:outline-none w-8 h-8 flex justify-center items-center">
                    <div class="menu-icon w-6 h-5 flex flex-col justify-between relative transform transition-all duration-300">
                        <span class="w-full h-0.5 bg-white transform transition-all duration-300 origin-center"></span>
                        <span class="w-full h-0.5 bg-white transition-opacity duration-300"></span>
                        <span class="w-full h-0.5 bg-white transform transition-all duration-300 origin-center"></span>
                    </div>
                </button>
            </div>
        </div>

        <!-- Mobile Menu Backdrop -->
        <div id="mobile-menu-backdrop" class="fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 opacity-0 pointer-events-none backdrop-blur-sm"></div>

        <!-- Mobile Menu Sidebar -->
        <div id="mobile-menu-sidebar" class="fixed top-0 right-0 h-full w-64 bg-black border-l border-gray-900 z-50 transform translate-x-full transition-transform duration-300 ease-in-out shadow-2xl pt-24 px-6">
            <nav class="flex flex-col gap-6">
                <!-- Using clean URLs -->
                <a href="/" class="text-lg font-medium text-gray-400 hover:text-white hover:text-corporate-blue transition-colors border-b border-gray-800 pb-2">Home</a>
                <a href="/thrills/" class="text-lg font-medium text-gray-400 hover:text-white hover:text-corporate-blue transition-colors border-b border-gray-800 pb-2">Thrills</a>
                <a href="/games/" class="text-lg font-medium text-gray-400 hover:text-white hover:text-corporate-blue transition-colors border-b border-gray-800 pb-2">Games</a>
                <a href="/apps/" class="text-lg font-medium text-gray-400 hover:text-white hover:text-corporate-blue transition-colors border-b border-gray-800 pb-2">Apps</a>
                <a href="/about/" class="text-lg font-medium text-gray-400 hover:text-white hover:text-corporate-blue transition-colors border-b border-gray-800 pb-2">About</a>
                <a href="/contact/" class="text-lg font-medium text-gray-400 hover:text-white hover:text-corporate-blue transition-colors border-b border-gray-800 pb-2">Contact</a>
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
    const sidebar = headerElement.querySelector('#mobile-menu-sidebar');
    const backdrop = headerElement.querySelector('#mobile-menu-backdrop');
    const menuIcon = btn.querySelector('.menu-icon'); // The 3 lines container

    function toggleMenu() {
        const isClosed = sidebar.classList.contains('translate-x-full');

        if (isClosed) {
            // Open
            sidebar.classList.remove('translate-x-full');
            backdrop.classList.remove('opacity-0', 'pointer-events-none');
            document.body.style.overflow = 'hidden';

            // Animate Hamburger to X
            // Line 1: Rotate 45deg, Translate
            menuIcon.children[0].classList.add('rotate-45', 'translate-y-2.5');
            // Line 2: Fade out
            menuIcon.children[1].classList.add('opacity-0');
            // Line 3: Rotate -45deg, Translate
            menuIcon.children[2].classList.add('-rotate-45', '-translate-y-2.5');

        } else {
            // Close
            sidebar.classList.add('translate-x-full');
            backdrop.classList.add('opacity-0', 'pointer-events-none');
            document.body.style.overflow = '';

            // Animate X to Hamburger
            menuIcon.children[0].classList.remove('rotate-45', 'translate-y-2.5');
            menuIcon.children[1].classList.remove('opacity-0');
            menuIcon.children[2].classList.remove('-rotate-45', '-translate-y-2.5');
        }
    }

    btn.addEventListener('click', toggleMenu);
    backdrop.addEventListener('click', toggleMenu);
}
