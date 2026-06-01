// =====================================================
// FINE CLOTHING - INDEX.JS
// =====================================================


// =====================================================
// NAVBAR SCROLL EFFECT
// =====================================================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(255,255,255,0.78)";

        navbar.style.boxShadow =
        "0 10px 35px rgba(0,140,255,0.15)";

    }

    else{

        navbar.style.background =
        "rgba(255,255,255,0.55)";

        navbar.style.boxShadow =
        "0 8px 30px rgba(0,0,0,0.08)";

    }

});


// =====================================================
// HERO CONTENT ANIMATION
// =====================================================

const heroContent =
document.querySelector(".hero-content");

window.addEventListener("load", () => {

    heroContent.style.opacity = "0";

    heroContent.style.transform =
    "translateY(50px)";

    setTimeout(() => {

        heroContent.style.transition =
        "1.2s ease";

        heroContent.style.opacity = "1";

        heroContent.style.transform =
        "translateY(0px)";

    }, 300);

});


// =====================================================
// DROPDOWN MENU
// =====================================================


// PRODUCTS

const productBtn =
document.querySelector(".products-menu");

const productDropdown =
document.querySelector(".products-dropdown");

productBtn.addEventListener("click", (e) => {

    e.preventDefault();

    productDropdown.classList.toggle(
    "showDropdown");

});


// CATEGORY

const categoryBtn =
document.querySelector(".category-menu");

const categoryDropdown =
document.querySelector(".category-dropdown");

categoryBtn.addEventListener("click", (e) => {

    e.preventDefault();

    categoryDropdown.classList.toggle(
    "showDropdown");

});


// CLOSE DROPDOWN OUTSIDE CLICK

window.addEventListener("click", (e) => {

    if(
    !e.target.closest(".dropdown")
    ){

        productDropdown.classList.remove(
        "showDropdown");

        categoryDropdown.classList.remove(
        "showDropdown");

    }

});


// =====================================================
// PRODUCT CARD HOVER EFFECT
// =====================================================

const productCards =
document.querySelectorAll(".product-card");

productCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px) scale(1)";

    });

});


// =====================================================
// BUTTON CLICK EFFECT
// =====================================================

const buttons =
document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform =
        "scale(0.92)";

        setTimeout(() => {

            button.style.transform =
            "scale(1)";

        }, 150);

    });

});


// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

const revealElements =
document.querySelectorAll(
".category-card, .product-card, .section-title"
);

function revealOnScroll(){

    const windowHeight =
    window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
        element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.style.opacity = "1";

            element.style.transform =
            "translateY(0px)";

            element.style.transition =
            "0.8s ease";

        }

    });

}


// INITIAL STATE

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(80px)";

});


// RUN FUNCTION

window.addEventListener(
"scroll",
revealOnScroll
);


// =====================================================
// AUTO GLOW EFFECT
// =====================================================

setInterval(() => {

    document.body.style.filter =
    "brightness(1.01)";

    setTimeout(() => {

        document.body.style.filter =
        "brightness(1)";

    }, 500);

}, 4000);





/* =========================================
   PRODUCT IMAGE HOVER CHANGE
========================================= */

function changeImage(element) {

    document.getElementById("mainProductImage").src =
    element.src;

}


/* =========================================
   SIZE SELECTOR
========================================= */

const sizeButtons =
document.querySelectorAll(".sizes button");

sizeButtons.forEach(button => {

    button.addEventListener("click", () => {

        sizeButtons.forEach(btn => {

            btn.classList.remove("active-size");

        });

        button.classList.add("active-size");

    });

});


/* =========================================
   SCROLL TO TOP BUTTON
========================================= */

const scrollBtn =
document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.style.display = "flex";

    }

    else{

        scrollBtn.style.display = "none";

    }

});


/* =========================================
   BUY NOW BUTTON
========================================= */

const buyBtn =
document.querySelector(".buy-btn");

if(buyBtn){

    buyBtn.addEventListener("click", () => {

        alert(
        "Thank You For Shopping With Fine Clothing ❤️"
        );

    });

}


/* =========================================
   ADD TO CART BUTTON
========================================= */

const cartBtn =
document.querySelector(".cart-btn");

if(cartBtn){

    cartBtn.addEventListener("click", () => {

        alert(
        "Product Added To Cart 🛒"
        );

    });

}







const videos = document.querySelectorAll(".hover-video");

videos.forEach(video => {

    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0; // restart from beginning
    });

});