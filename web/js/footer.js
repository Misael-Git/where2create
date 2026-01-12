function loadFooter() {
    const year = new Date().getFullYear();
    const path = window.location.pathname;
    const isRoot = !path.includes('/thrills/') && !path.includes('/games/') && !path.includes('/apps/') && !path.includes('/about/') && !path.includes('/contact/');
    const segments = path.split('/').filter(s => s.length > 0);
    const parent = segments[segments.length - 2];
    const isDeep = parent === 'kraken' || parent === 'mermaid' || parent === 'impostor';

    let relPrefix = '';
    if (isDeep) relPrefix = '../../';
    else if (!isRoot) relPrefix = '../';

    const footerHTML = `
    <footer class="py-32">
        <div class="container-l">
            <!-- Main Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-10">
                
                <!-- Brand Column -->
                <div class="lg:col-span-5">
                    <img src="${relPrefix}img/LOGO.png" alt="W2C" class="h-8 w-auto mb-10 opacity-30">
                    <h4 class="text-3xl font-light text-white mb-8 tracking-tighter leading-snug">
                        Where 2 Create is a creative engine designing the intersections of digital architecture & physical emotion.
                    </h4>
                    <p class="text-[10px] text-slate-600 uppercase tracking-[0.5em] font-bold">&copy; ${year} W2C STUDIO / ALL RIGHTS RESERVED.</p>
                </div>

                <!-- Empty Space for Balancce -->
                <div class="hidden lg:block lg:col-span-1"></div>

                <!-- Links 1 -->
                <div class="lg:col-span-2">
                    <span class="text-[10px] text-slate-700 uppercase tracking-[0.4em] font-bold block mb-10">Portfolio</span>
                    <ul class="flex flex-col gap-5 list-none">
                        <li><a href="${relPrefix}thrills/index.html" class="text-[12px] font-bold text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-all decoration-none">Thrills</a></li>
                        <li><a href="${relPrefix}games/index.html" class="text-[12px] font-bold text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-all decoration-none">Games</a></li>
                        <li><a href="${relPrefix}apps/index.html" class="text-[12px] font-bold text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-all decoration-none">Apps</a></li>
                    </ul>
                </div>

                <!-- Links 2 -->
                <div class="lg:col-span-2">
                    <span class="text-[10px] text-slate-700 uppercase tracking-[0.4em] font-bold block mb-10">Explore</span>
                    <ul class="flex flex-col gap-5 list-none">
                        <li><a href="${relPrefix}about/index.html" class="text-[12px] font-bold text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-all decoration-none">About</a></li>
                        <li><a href="${relPrefix}contact/index.html" class="text-[12px] font-bold text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-all decoration-none">Contact</a></li>
                    </ul>
                </div>

                <!-- Social -->
                <div class="lg:col-span-2">
                    <span class="text-[10px] text-slate-700 uppercase tracking-[0.4em] font-bold block mb-10">Connect</span>
                    <div class="flex gap-6">
                        <a href="#" class="text-slate-600 hover:text-white transition-all"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
                        <a href="#" class="text-slate-600 hover:text-white transition-all"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg></a>
                    </div>
                </div>

            </div>
        </div>
    </footer>
    `;

    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = footerHTML;
    }
}
window.loadFooter = loadFooter;
