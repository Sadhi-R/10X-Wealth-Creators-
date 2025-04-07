document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-content a');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenuOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    mobileMenuOverlay.addEventListener('click', function(e) {
        if (e.target === mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}); 