

// ########### setting the slider
let slides = document.querySelectorAll('.slide')
let slideBtns = document.querySelectorAll('.navigation .btn')
let currentSlide = 1;

let manualNav = function (manual) {

    slides.forEach((slide) => {
        slide.classList.remove('active');

        slideBtns.forEach((btn) => {
            btn.classList.remove('active')
        })
    })

    slides[manual].classList.add('active')
    slideBtns[manual].classList.add('active')
}

slideBtns.forEach((btn, indx) => {
    btn.addEventListener('click', () => {
        manualNav(indx);
        currentSlide = indx
    })
})
