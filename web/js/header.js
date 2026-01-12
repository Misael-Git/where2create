function loadHeader(currentPage) {
    const path = window.location.pathname;
    const isRoot = !path.includes('/thrills/') && !path.includes('/games/') && !path.includes('/apps/') && !path.includes('/about/') && !path.includes('/contact/');
    const segments = path.split('/').filter(s => s.length > 0);
    const parent = segments[segments.length - 2];
    const isDeep = parent === 'kraken' || parent === 'mermaid' || parent === 'impostor' || parent === 'party-guide';

    let relPrefix = '';
    if (isDeep) relPrefix = '../../';
    else if (!isRoot) relPrefix = '../';

    const headerHTML = `
        <div class="container-l h-full flex justify-between items-center relative">
            
            <!-- Branding -->
            <div class="flex-1 flex items-center">
                <a href="${relPrefix}index.html" class="flex items-center transition-opacity hover:opacity-70">
                    <img src="${relPrefix}img/LOGO.png" alt="W2C" class="h-6 md:h-7 w-auto object-contain" onerror="this.onerror=null; this.src=''; this.innerHTML='<span class=\'font-bold text-white tracking-tighter text-xl\'>W2C.</span>';">
                </a>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center">
                <ul class="flex items-center gap-1">
                    <li><a href="${relPrefix}index.html" data-nav="index" class="nav-link">Home</a></li>
                    <li><a href="${relPrefix}thrills/index.html" data-nav="thrills" class="nav-link">Thrills</a></li>
                    <li><a href="${relPrefix}games/index.html" data-nav="games" class="nav-link">Games</a></li>
                    <li><a href="${relPrefix}apps/index.html" data-nav="apps" class="nav-link">Apps</a></li>
                    <li><a href="${relPrefix}about/index.html" data-nav="about" class="nav-link">About</a></li>
                    <li><a href="${relPrefix}contact/index.html" data-nav="contact" class="nav-link">Contact</a></li>
                </ul>
            </nav>

            <!-- Spacer for balance -->
            <div class="flex-1 hidden md:flex"></div>

            <!-- Mobile Toggle -->
            <button id="m-btn" class="md:hidden flex items-center justify-center w-10 h-10 text-white rounded-xl hover:bg-white/5 transition-all">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
            </button>

            <!-- Mobile Menu -->
            <div id="m-sidebar" class="fixed top-0 right-0 h-screen w-full md:w-[400px] bg-black translate-x-full transition-transform duration-500 z-[10001] p-12 flex flex-col justify-center">
                <button id="m-close" class="absolute top-8 right-10 text-white opacity-50 hover:opacity-100 italic font-bold">Close</button>
                <nav class="flex flex-col gap-8">
                    <a href="${relPrefix}index.html" class="text-5xl font-extrabold text-white decoration-none hover:text-blue-500 tracking-tighter">Home</a>
                    <a href="${relPrefix}thrills/index.html" class="text-5xl font-extrabold text-white decoration-none hover:text-blue-500 tracking-tighter">Thrills</a>
                    <a href="${relPrefix}games/index.html" class="text-5xl font-extrabold text-white decoration-none hover:text-blue-500 tracking-tighter">Games</a>
                    <a href="${relPrefix}apps/index.html" class="text-5xl font-extrabold text-white decoration-none hover:text-blue-500 tracking-tighter">Apps</a>
                    <a href="${relPrefix}about/index.html" class="text-5xl font-extrabold text-white decoration-none hover:text-blue-500 tracking-tighter">About</a>
                    <a href="${relPrefix}contact/index.html" class="text-5xl font-extrabold text-white decoration-none hover:text-blue-500 tracking-tighter">Contact</a>
                </nav>
            </div>
            <div id="m-shade" class="fixed inset-0 bg-black/80 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-500 z-[10000]"></div>

        </div>
    `;

    const el = document.createElement('header');
    el.id = "main-header";
    el.innerHTML = headerHTML;

    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) placeholder.replaceWith(el);
    else document.body.prepend(el);

    // Dynamic Scrolling
    const updateHeader = () => {
        if (window.scrollY > 50) el.classList.add('scrolled');
        else el.classList.remove('scrolled');
    };
    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Init state

    // Active State
    el.querySelectorAll('[data-nav]').forEach(link => {
        if (link.dataset.nav === currentPage) link.classList.add('active');
    });

    // Mobile Logic
    const btn = document.getElementById('m-btn');
    const close = document.getElementById('m-close');
    const bar = document.getElementById('m-sidebar');
    const shade = document.getElementById('m-shade');

    if (btn && bar && shade) {
        const toggle = (force) => {
            const open = typeof force === 'boolean' ? force : bar.classList.contains('translate-x-full');
            bar.classList.toggle('translate-x-full', !open);
            shade.classList.toggle('opacity-0', !open);
            shade.classList.toggle('pointer-events-none', !open);
            document.body.style.overflow = open ? 'hidden' : '';
        };
        btn.onclick = () => toggle(true);
        close.onclick = shade.onclick = () => toggle(false);
    }
}
window.loadHeader = loadHeader;
