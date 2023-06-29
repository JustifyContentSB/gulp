"use strict";

$(document).ready(function () {
   // Your code here
   animationMove();
   showLazyImages();
   showDropdownBlock();
   reviewsSlider();
   videosSlider();
});

// Your functions here

function showLazyImages() {
   const observer = window.lozad("[data-lazyload]", {
   rootMargin: "500px 0px",
   loaded: function (el) {
      el.style.opacity = "1";
      el.classList.add("is-loaded");
      el.parentNode.parentNode.classList.add("lazy-loaded");
   }
   });
   observer.observe();
}

function animationMove() {
   let controller = new ScrollMagic.Controller();
   let revealElements = document.getElementsByClassName("animation");
   for (let i = 0; i < revealElements.length; i++) {
      new ScrollMagic.Scene({
         triggerElement: revealElements[i],
         offset: 50,
         triggerHook: 0.9,
         reverse: false
      })
         .setClassToggle(revealElements[i], "animated")
         .addTo(controller);
   }
}

function showDropdownBlock() {
   $('[data-dropdown]').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('is-active');
      $(this).next().slideToggle(300);
   });
}

function reviewsSlider() {
   var swiper = new Swiper(".reviews__container", {
      slidesPerView: "auto",
      spaceBetween: 20,
      navigation: {
         nextEl: ".reviews-button-next",
         prevEl: ".reviews-button-prev",
      },
   });
}

function videosSlider() {
   var swiper = new Swiper(".videos__container", {
      slidesPerView: "auto",
      spaceBetween: 20,
      navigation: {
         nextEl: ".videos-button-next",
         prevEl: ".videos-button-prev",
      },
   });
}