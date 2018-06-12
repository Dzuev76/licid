$('.slick').slick({
  dots: true,
  autoplay: true,
  speed: 3000,
  arrows: false,
  slidesToShow: 2,
  mobileFirst: true,
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
 });