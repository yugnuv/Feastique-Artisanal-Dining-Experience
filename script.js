// 1. Mobile Menu Toggle (Hamburger Menu)
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".navbar-toggler");
    const navMenu = document.querySelector(".navbar-collapse");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("show");
        });
    }
});

// 2. Image Carousel (Custom Carousel)
document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;
    const nextButton = document.querySelector(".carousel-next");
    const prevButton = document.querySelector(".carousel-prev");

    function goToSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    if (nextButton && prevButton) {
        nextButton.addEventListener("click", function() {
            currentIndex = (currentIndex + 1) % totalSlides; // Loop back to first slide
            goToSlide(currentIndex);
        });

        prevButton.addEventListener("click", function() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to last slide
            goToSlide(currentIndex);
        });
    }

    // Initialize the carousel
    goToSlide(currentIndex);
});

// 3. Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute("href"));
        
        window.scrollTo({
            top: target.offsetTop - 50, // Adjust for any header offset
            behavior: "smooth"
        });
    });
});

// 4. Modal Functionality
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector(".modal");
    const openModalButton = document.querySelector(".open-modal");
    const closeModalButton = document.querySelector(".close-modal");

    if (openModalButton && modal) {
        openModalButton.addEventListener("click", function() {
            modal.style.display = "block";
        });

        closeModalButton.addEventListener("click", function() {
            modal.style.display = "none";
        });

        window.addEventListener("click", function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            const target = this.getAttribute("data-tab");

            // Remove active classes from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabPanes.forEach(pane => pane.classList.remove("active"));

            // Activate the clicked tab and its content
            this.classList.add("active");
            document.getElementById(target).classList.add("active");
        });
    });
});
