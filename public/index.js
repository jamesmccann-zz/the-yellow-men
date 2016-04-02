$(document).ready(function() {

  $('.work-carousel').slick({
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    cssEase: 'linear',
    adaptiveHeight: false,
    arrows: false
  })

  $('.work-carousel-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.work-carousel',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

})
