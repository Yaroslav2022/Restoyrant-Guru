// =====================SWIPER-SLIDER=======================
new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
    },
    slidesPerView: 4,
    watchOverflow: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            spaceBetween: 6,
            slidesPerView: 1,
        },
        389: {
            slidesPerView: 1.1,
            spaceBetween: 6,

        },
        489: {
            slidesPerView: 1.3,
            spaceBetween: 6,

        },
        590: {
            slidesPerView: 2,
            spaceBetween: 20,

        },
        880: {
            slidesPerView: 3,

        },
        1162: {
            slidesPerView: 4,
        },
    }
});
// =====================SWIPER-SLIDER-end=======================





// =========================FLAG-MENU===============================

const activeBtn = document.querySelectorAll('.language-selection_flag-icon');
const disabledMenu = document.querySelector('.language-menu');
const closeMenuLangage = document.querySelector('.close-language');

for (index = 0; index < activeBtn.length; index++) {
    button = activeBtn[index];
    button.addEventListener('click', (event) => {
        event._isClick = true
        disabledMenu.classList.remove('language-menu--disabled')
    });
    closeMenuLangage.addEventListener('click', () => {
        disabledMenu.classList.add('language-menu--disabled')
    });
}



disabledMenu.addEventListener('click', function (event) {
    event._isClick = true
});
document.body.addEventListener('click', function (event) {
    if (event._isClick == true) return
    disabledMenu.classList.add('language-menu--disabled')
});


const flagRusBtn = document.querySelector('.language-selection_flag-rus')
const flagUsaBtn = document.querySelector('.language-selection_flag-usa')
const flagEspBtn = document.querySelector('.language-selection_flag-espanol')

const flagRus = document.getElementById('language-selection-rus');
const flagUSA = document.getElementById('language-selection-en');
const flagEsp = document.getElementById('language-selection-es');


flagUSA.addEventListener('click', () => {
    flagEspBtn.classList.add('language-selection_flag--disabled');
    flagRusBtn.classList.add('language-selection_flag--disabled');
    flagUsaBtn.classList.remove('language-selection_flag--disabled');
    flagUSA.classList.add('language-selection--disabled')
    flagRus.classList.remove('language-selection--disabled')
    flagEsp.classList.remove('language-selection--disabled')
})

flagEsp.addEventListener('click', () => {
    flagEspBtn.classList.remove('language-selection_flag--disabled');
    flagRusBtn.classList.add('language-selection_flag--disabled');
    flagUsaBtn.classList.add('language-selection_flag--disabled');
    flagUSA.classList.remove('language-selection--disabled');
    flagRus.classList.remove('language-selection--disabled');
    flagEsp.classList.add('language-selection--disabled');
})

flagRus.addEventListener('click', () => {
    flagEspBtn.classList.add('language-selection_flag--disabled');
    flagRusBtn.classList.remove('language-selection_flag--disabled');
    flagUsaBtn.classList.add('language-selection_flag--disabled');
    flagUSA.classList.remove('language-selection--disabled');
    flagRus.classList.add('language-selection--disabled');
    flagEsp.classList.remove('language-selection--disabled');
})




// =========================FLAG-MENU-end===============================
