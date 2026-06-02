// =====================================================
// FINE CLOTHING - FINAL CLEAN JS (FULL REPLACEMENT)
// =====================================================


// =====================================================
// NAVBAR SCROLL EFFECT
// =====================================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(255,255,255,0.78)";
        navbar.style.boxShadow = "0 10px 35px rgba(0,140,255,0.15)";
    } else {
        navbar.style.background = "rgba(255,255,255,0.55)";
        navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
    }
});


// =====================================================
// HERO ANIMATION
// =====================================================

const heroContent = document.querySelector(".hero-content");

window.addEventListener("load", () => {

    if (!heroContent) return;

    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(50px)";

    setTimeout(() => {
        heroContent.style.transition = "1.2s ease";
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0px)";
    }, 300);

});


// =====================================================
// HAMBURGER MENU (MOBILE)
// =====================================================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        navLinks.classList.toggle("active");
    });

    window.addEventListener("click", (e) => {
        if (!e.target.closest(".nav-links") && !e.target.closest(".hamburger")) {
            navLinks.classList.remove("active");
        }
    });

}


// =====================================================
// DROPDOWN MENU (HOVER DESKTOP + CLICK MOBILE)
// =====================================================

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {

    const menu = dropdown.querySelector("ul");

    if (!menu) return;

    // Desktop hover
    dropdown.addEventListener("mouseenter", () => {
        if (window.innerWidth > 768) {
            menu.classList.add("showDropdown");
        }
    });

    dropdown.addEventListener("mouseleave", () => {
        if (window.innerWidth > 768) {
            menu.classList.remove("showDropdown");
        }
    });

    // Mobile click
    dropdown.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            menu.classList.toggle("showDropdown");
        }
    });

});


// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

const revealElements = document.querySelectorAll(
    ".category-card, .product-card, .section-title"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0px)";
            element.style.transition = "0.8s ease";
        }
    });
}

// initial state
revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(80px)";
});

window.addEventListener("scroll", revealOnScroll);


// =====================================================
// AUTO GLOW EFFECT
// =====================================================

setInterval(() => {

    document.body.style.filter = "brightness(1.01)";

    setTimeout(() => {
        document.body.style.filter = "brightness(1)";
    }, 500);

}, 4000);


// =====================================================
// PRODUCT IMAGE CHANGE
// =====================================================

function changeImage(element) {

    const mainImg = document.getElementById("mainProductImage");

    if (mainImg) {
        mainImg.src = element.src;
    }
}


// =====================================================
// SIZE SELECTOR
// =====================================================

const sizeButtons = document.querySelectorAll(".sizes button");

sizeButtons.forEach(button => {

    button.addEventListener("click", () => {

        sizeButtons.forEach(btn => btn.classList.remove("active-size"));
        button.classList.add("active-size");

    });

});


// =====================================================
// SCROLL TO TOP BUTTON
// =====================================================

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (!scrollBtn) return;

    if (window.scrollY > 300) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }

});


// =====================================================
// BUY BUTTON
// =====================================================

const buyBtn = document.querySelector(".buy-btn");

if (buyBtn) {
    buyBtn.addEventListener("click", () => {
        alert("Thank You For Shopping With Fine Clothing ❤️");
    });
}


// =====================================================
// ADD TO CART BUTTON
// =====================================================

const cartBtn = document.querySelector(".cart-btn");

if (cartBtn) {
    cartBtn.addEventListener("click", () => {
        alert("Product Added To Cart 🛒");
    });
}


// =====================================================
// PRODUCT VIDEO HOVER PLAY
// =====================================================

const videos = document.querySelectorAll(".hover-video");

videos.forEach(video => {

    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });

});