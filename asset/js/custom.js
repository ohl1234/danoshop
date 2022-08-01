// 1. 검색버튼 클릭 시  검색영역 등징
$('.search-btn').click(function(){
    $('.search-wrap').css('display','block');
});
$('.btn-close').click(function(){
    $('.search-wrap').css('display','none');
});

// 2. swiper slide
const slide1 = new Swiper(".slide1 .swiper", {
    loop:true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
});
const slide2 = new Swiper(".slide2 .swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
});