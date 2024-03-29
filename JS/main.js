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

const activeFlag = document.querySelector('.language-selection_flag-rus');
const disabledMenu = document.querySelector('.language-menu');
const closeMenuLangage = document.querySelector('.close-language')
activeFlag.addEventListener('click', (event) => {
    event._isClick = true
    disabledMenu.classList.remove('language-menu--disabled')
});
closeMenuLangage.addEventListener('click', () => {
    disabledMenu.classList.add('language-menu--disabled')
});
disabledMenu.addEventListener('click', function (event) {
    event._isClick = true
});
document.body.addEventListener('click', function (event) {
    if (event._isClick == true) return
    disabledMenu.classList.add('language-menu--disabled')
});

// =========================FLAG-MENU===============================
