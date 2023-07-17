var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

const btnPrev = document.getElementById("prev");

btnPrev.addEventListener("click", () => {
    plusSlides(-1);
});

const btnNext = document.getElementById("next");

btnNext.addEventListener("click", () => {
    plusSlides(1);
});

const dots = document.querySelectorAll('.dot');

Array.from(dots).forEach(link => {
    link.addEventListener('click', function(event) {
        currentSlide(event.target.getAttribute('data-val'));
    });
});