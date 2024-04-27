let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

window.addEventListener('scroll', function() {
    var footerPosition = document.querySelector('footer').getBoundingClientRect().top;
    var socialLinks = document.querySelector('.social-links-always');
    
    if (footerPosition <= window.innerHeight) {
        socialLinks.classList.remove('show');
    } else {
        socialLinks.classList.add('show');
    }
});