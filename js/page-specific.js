document.addEventListener('DOMContentLoaded', function () {
    // Logic for the Hommes page
    if (document.querySelector('body.hommes-page')) {
        const productsContainer = document.querySelector('.products-container');
        const categoryTabs = document.querySelectorAll('.category-tab');

        function renderAndInit() {
            const activeTab = document.querySelector('.category-tab.active');
            const category = activeTab.getAttribute('data-category');
            const filteredProducts = category === 'all'
                ? hommesProducts
                : hommesProducts.filter(p => p.category === category);

            renderProducts('.products-container', filteredProducts, () => {
                if (typeof initProductCards === 'function' && typeof initHorizontalSlider === 'function') {
                    initProductCards();
                    initHorizontalSlider();
                }
            });
        }

        // Initial render
        if (productsContainer && categoryTabs.length > 0) {
            renderAndInit();
        }

        // Category filtering
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', function () {
                categoryTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                renderAndInit();
            });
        });
    }

    // Logic for the Femmes page
    if (document.querySelector('body.femmes-page')) {
        const productsContainer = document.querySelector('.products-container');
        const categoryTabs = document.querySelectorAll('.category-tab');

        function renderAndInit() {
            const activeTab = document.querySelector('.category-tab.active');
            const category = activeTab.getAttribute('data-category');
            const filteredProducts = category === 'all'
                ? femmesProducts
                : femmesProducts.filter(p => p.category === category);

            renderProducts('.products-container', filteredProducts, () => {
                if (typeof initProductCards === 'function' && typeof initHorizontalSlider === 'function') {
                    initProductCards();
                    initHorizontalSlider();
                }
            });
        }

        // Initial render
        if (productsContainer && categoryTabs.length > 0) {
            renderAndInit();
        }


        // Category filtering
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', function () {
                categoryTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                renderAndInit();
            });
        });
    }

    // Logic for the Index page (featured products)
    if (document.querySelector('.featured-products-container')) {
        const featuredProducts = [
            ...(hommesProducts || []).slice(0, 2),
            ...(femmesProducts || []).slice(0, 2)
        ];
        if (featuredProducts.length > 0) {
            renderProducts('.featured-products-container', featuredProducts);
        }
    }

    // Logic for the Contact page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (name && email && subject && message) {
                alert('Merci pour votre message ! Nous vous contacterons bientôt.');
                this.reset();
            } else {
                alert('Veuillez remplir tous les champs obligatoires.');
            }
        });
    }
});