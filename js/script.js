let swiper = new Swiper(".aio-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    breakpoints: {
        767.98: {
            slidesPerView: 2
        },
        1199.98: {
            slidesPerView: 3
        }
    }
});

let swiper2 = new Swiper(".team-carousel", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    freeMode: true,
    breakpoints: {
        575.98: {
            slidesPerView: 2
        },
        991.98: {
            slidesPerView: 3
        },
        1199.98: {
            slidesPerView: 4
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

$(document).ready(function () {
  const scrollBtn = $('.top-btn');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      scrollBtn.fadeIn();
    } else {
      scrollBtn.fadeOut();
    }
  });

  scrollBtn.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600); // smooth scroll
    scrollBtn.fadeOut(); // hide button again
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
