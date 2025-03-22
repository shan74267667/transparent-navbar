// Initialize AOS
AOS.init();

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Handle dropdown for mobile and desktop
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    const isMobile = () => window.innerWidth < 992;

    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        // For mobile: handle click events
        dropdownToggle.addEventListener('click', function(e) {
            if (isMobile()) {
                e.preventDefault();
                dropdownMenu.classList.toggle('show');
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (isMobile() && !dropdown.contains(e.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    });
});

// Initialize Magnific Popup
$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

// Add animation classes to carousel captions
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('heroCarousel');
    carousel.addEventListener('slide.bs.carousel', function(e) {
        const captions = document.querySelectorAll('.carousel-caption h1, .carousel-caption p');
        captions.forEach(caption => {
            caption.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__fadeInUp');
        });
    });

    carousel.addEventListener('slid.bs.carousel', function(e) {
        const activeCaption = e.relatedTarget.querySelector('.carousel-caption h1');
        const activeParagraph = e.relatedTarget.querySelector('.carousel-caption p');
        
        activeCaption.classList.add('animate__animated', 'animate__fadeInDown');
        activeParagraph.classList.add('animate__animated', 'animate__fadeInUp');
    });
});
