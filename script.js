window.addEventListener("DOMContentLoaded", () => {

    // --- Scroll-triggered fade-in for elements ---
    const fadeEls = document.querySelectorAll(".fade-in-fastest, .fade-in-fast, .fade-in-slow, .fade-in-slowest");

    if (fadeEls.length) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        fadeEls.forEach(el => observer.observe(el));
    }
});

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mobileNav.classList.toggle("open");
        menuToggle.classList.toggle("open", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    mobileNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("open");
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// --- Fade the fixed header as the user scrolls down ---
window.addEventListener("scroll", () => {
    const header = document.querySelector(".index-header-content, #other-header-content");
    if (!header) return;

    const fadeEnd = 60; // px after which the header is fully transparent
    const opacity = Math.max(0, Math.min(1, 1 - window.scrollY / fadeEnd));

    header.style.opacity = opacity;
});


// --- MAKES THE IMAGE FADE AWAY AS YOU SCROLL ---

// window.addEventListener("scroll", () => { 
//     const leftSide = document.querySelector("#left-side");
//     if (!leftSide) return;

//     const fadeEnd = 300; // px after which the image is fully transparent
//     const opacity = Math.max(0, Math.min(1, 1 - window.scrollY / fadeEnd));

//     leftSide.style.opacity = opacity;
// });
