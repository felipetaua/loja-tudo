document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerIcon = hamburgerBtn.querySelector('i'); // Pega o elemento <i> dentro do botão

    hamburgerBtn.addEventListener('click', () => {
        // Adiciona ou remove a classe 'open' do menu
        mobileMenu.classList.toggle('open');

        // Troca o ícone de hambúrguer para 'X' e vice-versa
        const isOpen = mobileMenu.classList.contains('open');
        hamburgerIcon.classList.toggle('fa-bars', !isOpen);
        hamburgerIcon.classList.toggle('fa-xmark', isOpen);
    });

    // Lógica para os botões de scroll dos produtos
    const prevScrollBtn = document.getElementById('prev-scroll-btn');
    const nextScrollBtn = document.getElementById('next-scroll-btn');
    const productsScroll = document.querySelector('.products-scroll');

    if (prevScrollBtn && nextScrollBtn && productsScroll) {
        const getScrollAmount = () => {
            const firstItem = productsScroll.querySelector('.product-item');
            if (!firstItem) return 0;

            const itemWidth = firstItem.offsetWidth;
            const itemGap = parseInt(window.getComputedStyle(productsScroll).gap) || 20;
            return itemWidth + itemGap;
        }
        const scrollAmount = getScrollAmount();

        nextScrollBtn.addEventListener('click', () => {
            productsScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevScrollBtn.addEventListener('click', () => {
            productsScroll.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    const backToTopBtn = document.getElementById('back-to-top-btn');
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) { 
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
    });

    
    // cronometro de lançamento
    const countdown = () => {
        const launchDate = new Date('2025-09-20T09:00:00').getTime();
        const now = new Date().getTime();
        const distance = launchDate - now;

        if (distance < 0) {
            const countdownElement = document.getElementById('countdown');
            if (countdownElement) {
                countdownElement.innerHTML = "<h3 class='lancamento-title' style='font-size: 1.5rem; margin-top: 1rem;'>Já inauguramos! Venha nos visitar!</h3>";
            }
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    };

    if (document.getElementById('countdown')) {
        let countdownInterval = setInterval(countdown, 1000);
        countdown(); 
    }
});
