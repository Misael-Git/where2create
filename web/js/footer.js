export function loadFooter() {
    const year = new Date().getFullYear();
    const footerHTML = `
    <footer class="bg-black text-white shrink-0 mt-auto border-t border-gray-900">
        <div class="max-w-[1200px] mx-auto px-6 py-12 flex flex-col justify-between h-full">
            
            <!-- Main Content: Centered Group (Logo + Socials) -->
            <div class="flex flex-col items-center justify-center w-full mb-12">
                
                <!-- Logo -->
                <div class="mb-8">
                     <img src="/img/LOGO.png" alt="W2C Logo" class="h-20 w-auto opacity-90 hover:opacity-100 transition-opacity">
                </div>

                <!-- Socials (YouTube, TikTok, Instagram) -->
                <div class="flex space-x-8">
                    <!-- YouTube -->
                    <a href="#" class="text-gray-500 hover:text-red-600 transition-colors transform hover:scale-110 duration-200" aria-label="YouTube">
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    </a>
                    <!-- TikTok -->
                    <a href="#" class="text-gray-500 hover:text-pink-500 transition-colors transform hover:scale-110 duration-200" aria-label="TikTok">
                         <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.62-1.12v8.76c0 5.05-5.46 8.01-9.63 5.36-2.45-1.55-3.32-4.88-2-7.46 1.05-2.05 3.32-3.17 5.56-2.66.07.72.08 1.45.03 2.18-.74-.13-1.53-.02-2.19.33-1.13.6-1.66 1.96-1.28 3.18.36 1.17 1.57 1.86 2.77 1.59 1.25-.28 2.08-1.5 1.99-2.77V.02h2.67z"/></svg>
                    </a>
                    <!-- Instagram -->
                    <a href="#" class="text-gray-500 hover:text-corporate-orange transition-colors transform hover:scale-110 duration-200" aria-label="Instagram">
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468.913c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>

            <!-- Legal / Copyright (Bottom) -->
            <div class="text-xs text-gray-600 w-full text-center flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
                <p>&copy; ${year} Where 2 Create. All rights reserved.</p>
                <span class="hidden md:block">|</span>
                <div class="flex space-x-4">
                    <a href="#" class="hover:text-gray-400">Privacy Policy</a>
                    <a href="#" class="hover:text-gray-400">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
    `;

    const footerElement = document.createElement('footer');
    const placeholder = document.getElementById('footer-placeholder');
    // Create a temporary container
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = footerHTML;
    const newFooter = tempDiv.firstElementChild;

    if (placeholder) {
        placeholder.replaceWith(newFooter);
    } else {
        // If an existing footer exists, remove it
        const existingFooter = document.querySelector('footer');
        if (existingFooter) existingFooter.remove();
        document.body.appendChild(newFooter);
    }
}
