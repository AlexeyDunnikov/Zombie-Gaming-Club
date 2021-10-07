$(function () {
    $(".welcome__list").slick({
      slidesToShow: 5,
      swipeToSlide: true,
      easing: true,
      touchMove: true,
      arrows: false,
      speed: 600,
      autoplaySpeed: 1000,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 440,
          settings: {
            slidesToShow: 1,
            mobileFirst: true,
          },
        },
       
      ],
    });

    AOS.init();

})