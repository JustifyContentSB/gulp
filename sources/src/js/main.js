"use strict";

$(document).ready(function () {
   // Your code here
   showDropdownBlock();
   reviewsSlider();
   videosSlider();
});

// Your functions here

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