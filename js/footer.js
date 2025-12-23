export function loadFooter() {
    const footerHTML = `
        <div class="max-w-[1200px] mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                <!-- Brand Column -->
                <div class="col-span-1 md:col-span-4">
                    <h4 class="text-white text-lg font-semibold mb-6 tracking-tight">PROJECT <span class="text-corporate-blue">WEB</span></h4>
                    <p class="text-gray-500 text-sm leading-relaxed mb-6">
                        Innovando en experiencias digitales con una estética comercial limpia. 
                        Uniendo emociones, música y tecnología en un solo lugar.
                    </p>
                    <div class="flex gap-4">
                        <div class="w-8 h-8 rounded bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-corporate-blue hover:text-white transition-colors cursor-pointer">IG</div>
                        <div class="w-8 h-8 rounded bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-corporate-blue hover:text-white transition-colors cursor-pointer">TW</div>
                        <div class="w-8 h-8 rounded bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-corporate-blue hover:text-white transition-colors cursor-pointer">IN</div>
                    </div>
                </div>
                
                <!-- Spacer -->
                <div class="hidden md:block md:col-span-1"></div>

                <!-- Links Columns -->
                <div class="col-span-1 md:col-span-2">
                    <h4 class="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Discover</h4>
                    <ul class="space-y-4">
                        <li><a href="thrills.html" class="text-gray-500 text-sm hover:text-white transition-colors">Thrills & Parks</a></li>
                        <li><a href="music.html" class="text-gray-500 text-sm hover:text-white transition-colors">Music Hub</a></li>
                        <li><a href="games.html" class="text-gray-500 text-sm hover:text-white transition-colors">Gaming Zone</a></li>
                    </ul>
                </div>

                <div class="col-span-1 md:col-span-2">
                    <h4 class="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Company</h4>
                    <ul class="space-y-4">
                        <li><a href="about.html" class="text-gray-500 text-sm hover:text-white transition-colors">Sobre Mí</a></li>
                        <li><a href="contact.html" class="text-gray-500 text-sm hover:text-white transition-colors">Contacto</a></li>
                        <li><a href="apps.html" class="text-gray-500 text-sm hover:text-white transition-colors">Aplicaciones</a></li>
                    </ul>
                </div>

                <div class="col-span-1 md:col-span-3">
                    <h4 class="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Boletín</h4>
                    <p class="text-gray-500 text-sm mb-4">Suscríbete para recibir las últimas novedades.</p>
                    <div class="flex">
                        <input type="email" placeholder="Tu email" class="bg-gray-900 border-none text-white text-sm px-4 py-2 rounded-l w-full focus:ring-1 focus:ring-corporate-blue focus:outline-none">
                        <button class="bg-corporate-blue text-white px-4 py-2 rounded-r font-medium hover:bg-blue-600 transition-colors">OK</button>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
                <span class="mb-4 md:mb-0">&copy; 2025 Project Web. All rights reserved.</span>
                <div class="flex gap-8">
                    <a href="#" class="hover:text-gray-400 transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-gray-400 transition-colors">Terms of Service</a>
                    <a href="#" class="hover:text-gray-400 transition-colors">Cookies</a>
                </div>
            </div>
        </div>
    `;

    const footerElement = document.createElement('footer');
    footerElement.className = "bg-black text-white pt-20 pb-12 mt-auto w-full border-t border-gray-900"; // Richer padding
    footerElement.innerHTML = footerHTML;

    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.appendChild(footerElement);
    } else {
        document.body.appendChild(footerElement);
    }
}
