const slidesData = [
    {
        id: 'THRILLS',
        title: 'The Kraken',
        description: 'La furia del abismo en una hypercoaster única.',
        image: 'img/kraken.webp',
        link: 'thrills/kraken/index.html',
    },
    {
        id: 'THRILLS',
        title: 'The Mermaid',
        description: 'Un viaje hipnótico por aguas encantadas.',
        image: 'img/mermaid.webp',
        link: 'thrills/mermaid/index.html',
    },
    {
        id: 'GAMES',
        title: 'Impostor',
        description: 'Deducción social de alta tensión en tu navegador.',
        image: 'img/impostor.webp',
        link: 'games/impostor/index.html',
    },
    {
        id: 'APPS',
        title: 'Fill & Sign',
        description: 'Productividad sin fricciones para documentos.',
        image: 'img/apps.webp',
        link: 'apps/index.html',
    }
];

function loadCarousel(placeholderId, filterTitle) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) return;

    const path = window.location.pathname;
    const isRoot = !path.includes('/thrills/') && !path.includes('/games/') && !path.includes('/apps/');
    const segments = path.split('/').filter(s => s.length > 0);
    const parent = segments[segments.length - 2];
    const isDeep = parent === 'kraken' || parent === 'mermaid' || parent === 'impostor';

    let relPrefix = '';
    if (isDeep) relPrefix = '../../';
    else if (!isRoot) relPrefix = '../';

    const filtered = filterTitle
        ? slidesData.filter(s => !s.title.toLowerCase().includes(filterTitle.toLowerCase()))
        : slidesData;

    const html = `
        <div class="container-l py-20">
            <div class="flex justify-between items-end mb-10">
                <div>
                    <span class="tag">NEXT GENERATION</span>
                    <h2 class="text-3xl font-bold">Discover more projects</h2>
                </div>
                <div class="flex gap-2">
                    <button id="slide-prev" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button id="slide-next" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
            
            <div class="relative overflow-hidden">
                <div id="carousel-track" class="flex gap-6 transition-transform duration-700 ease-in-out">
                    ${filtered.map(slide => `
                        <a href="${relPrefix}${slide.link}" class="flex-none w-[320px] h-[350px] group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/5">
                            <img src="${relPrefix}${slide.image}" class="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 p-8 w-full">
                                <span class="text-[9px] font-bold tracking-[0.3em] text-blue-500 uppercase mb-2 block">${slide.id}</span>
                                <h3 class="text-xl font-bold text-white mb-2">${slide.title}</h3>
                                <p class="text-[12px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">${slide.description}</p>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    placeholder.innerHTML = html;

    const track = placeholder.querySelector('#carousel-track');
    let index = 0;
    const items = track.children.length;
    const cardWidth = 320 + 24; // Width + Gap

    const move = (step) => {
        index = (index + step + items) % items;
        // Basic calculation to prevent over-scrolling if possible
        const maxScroll = (items * cardWidth) - track.parentElement.offsetWidth;
        let scrollPos = index * cardWidth;
        if (scrollPos > maxScroll) scrollPos = maxScroll;
        if (scrollPos < 0) scrollPos = 0;

        track.style.transform = `translateX(-${scrollPos}px)`;
    };

    placeholder.querySelector('#slide-prev').onclick = () => move(-1);
    placeholder.querySelector('#slide-next').onclick = () => move(1);

    // Auto-play
    let interval = setInterval(() => move(1), 5000);
    placeholder.onmouseenter = () => clearInterval(interval);
    placeholder.onmouseleave = () => interval = setInterval(() => move(1), 5000);
}
window.loadCarousel = loadCarousel;
