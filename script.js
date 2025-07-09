// Select all buttons with class 'view-project-btn'
const buttons = document.querySelectorAll('.view-project-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const githubUrl = button.getAttribute('data-github');
    if (githubUrl) {
      window.open(githubUrl, '_blank'); // Opens the link in a new tab
    }
  });
});

  document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('main-nav').classList.toggle('active');
  });

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
