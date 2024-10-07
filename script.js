document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    const sections = document.querySelectorAll('section, #section2 .image, .photo img, #section2 .image-container');

    const revealSections = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    };

    revealSections();
    window.addEventListener('scroll', revealSections);
    
    let slideIndex = 0; 
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 } 
        slides[slideIndex - 1].style.display = "block"; 
        setTimeout(showSlides, 7000); 
    }

    document.querySelectorAll('.prev').forEach(button => {
        button.addEventListener('click', function() {
            plusSlides(-1);
        });
    });

    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', function() {
            plusSlides(1); 
        });
    });

    function plusSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        slideIndex += n;
        if (slideIndex > slides.length) { slideIndex = 1; } 
        if (slideIndex < 1) { slideIndex = slides.length; } 
        showCurrentSlide();
    }

    function showCurrentSlide() {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block"; 
    }

    function currentSlide(n) {
        slideIndex = n;
        showCurrentSlide();
    }
});
