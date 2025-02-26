// Mobile Navbar Toggle
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Scroll Animation
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 50) {
            element.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();
