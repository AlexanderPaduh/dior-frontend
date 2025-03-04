const swiperTop = new Swiper('.top__swiper', {
    // Optional parameters
    effect: 'fade',
    // autoplay: {
    //     delay: 5500,
    //     disableOnInteraction: false,
    // },


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const swiper = new Swiper(".about_slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

