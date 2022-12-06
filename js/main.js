$(function () {
  $('.top-slider__items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
    {
      breakpoint: 1175,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true 
    }
  },
      {
        breakpoint: 781,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true
        }
      },
    ],
    prevArrow: '<button type="button" class="slick-prev"><img src="images/top-slider/right-arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/top-slider/left-arrow.svg" alt=""></button>',
  });

})