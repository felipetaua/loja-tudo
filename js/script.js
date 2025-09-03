document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerIcon = hamburgerBtn.querySelector('i'); 

    hamburgerBtn.addEventListener('click', () => {
        // Adiciona ou remove a classe 'open' do menu
        mobileMenu.classList.toggle('open');

        // Troca o ícone de hambúrguer para 'X' e vice-versa
        const isOpen = mobileMenu.classList.contains('open');
        hamburgerIcon.classList.toggle('fa-bars', !isOpen);
        hamburgerIcon.classList.toggle('fa-xmark', isOpen);
    });
});
