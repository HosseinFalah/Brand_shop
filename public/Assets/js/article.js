const swiper = new Swiper(".article-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    grabCursor: true,
});

const lastedArticlesSwiper = new Swiper(".lastedArticles", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    grabCursor: true,
    breakpoints: {
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});