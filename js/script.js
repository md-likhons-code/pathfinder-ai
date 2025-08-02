let swiper = new Swiper(".aio-swiper", {
    slidesPerView: 1,
    spaceBetween: 36,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        575.98: {
            slidesPerView: 1.4
        },
        767.98: {
            slidesPerView: 2.3
        },
        991.98: {
            slidesPerView: 3
        },
        1199.98: {
            slidesPerView: 3.8
        }
    }
});

let swiper2 = new Swiper(".team-carousel", {
    slidesPerView: 1.3,
    spaceBetween: 50,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        575.98: {
            slidesPerView: 2
        },
        767.98: {
            slidesPerView: 3
        },
        991.98: {
            slidesPerView: 3.8
        }
    }
});

let swiper3 = new Swiper(".growth-carousel", {
    slidesPerView: 1,
    spaceBetween: 56,
    loop: true,
    freeMode: true,
});

let swiper4 = new Swiper(".testimonial-carousel-swiper", {
    slidesPerView: 1,
    spaceBetween: 28,
    loop: true,
    navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
    },
    breakpoints: {
    575.98: {
        slidesPerView: 2
    },
    767.98: {
        slidesPerView: 2.5
    },
    991.98: {
        slidesPerView: 3
    },
    1199.98: {
        slidesPerView: 3.8
    },
    1399.98: {
        slidesPerView: 4
    }
}
});

jQuery(document).ready(function() {
    $(".menu-button").click(function() {
        $(".mobile-menu").slideToggle("slow");
    });
});