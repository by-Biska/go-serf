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

  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 3,
    infinite: false,
    arrows: false,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
  });

  $(".holder__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt="">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt="">',
  });

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

  // PLUS / MINUS
  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg"></div><div class="quantity-button quantity-down"><img src="images/minus.svg"></div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  $(".quantity-button").on("click", function () {
    let summ =
      $(".nights").val() * $(".summ").data("nights") +
      ($(".guests").val() - 1) * $(".summ").data("guests");

    $(".summ").html(summ);
  });

  let summ =
    $(".nights").val() * $(".summ").data("nights") +
    ($(".guests").val() - 1) * $(".summ").data("guests");

  $(".summ").html(summ);
});
