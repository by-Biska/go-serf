$(function () {
  // Sliders
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    asNavFor: ".slider-dotshead",
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="">',
  });

  $(".slider-item__info-arrow").on("click", function () {
    $(".header__slider").slick("slickNext");
  });

  $(".slider-dotshead").slick({
    rows: 0,
    swipe: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
    focusOnSelect: true,
  });

  $(".surf-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="">',
      asNavFor: ".slider-map",
  });


  $(".slider-map").slick ({
    slidesToShow: 8,
    slidesToScroll: 3,
    infinite: false,
    arrows:false,
    asNavFor: '.surf-slider',
    focusOnSelect: true
  })

  // Date
  var d = new Date();
  if (d.getDate() < 10) {
    $(".date__day").text("0".concat(d.getDate()));
  } else {
    $(".date__day").text(d.getDate());
  }
  if (d.getMonth() + 1 < 10) {
    $(".date__month").text("0".concat(d.getMonth() + 1));
  } else {
    $(".date__month").text(d.getMonth() + 1);
  }
  $(".date__year").text(d.getFullYear());

});