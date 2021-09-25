$(function () {
  // menu-toggle-btn
$('.menu-toggle-btn').on("click", function() {
  $('.header__aside').toggleClass('active')
  $('.header__slider').toggleClass('opacity-off')
})


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
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1410,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1079,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 723,
        settings: {
          slidesToShow: 1.8,
        }
      },
      {
        breakpoint: 638,
        settings: {
          slidesToShow: 1.4,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.05,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.05,
        }
      }
    ]
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
  });

  $(".holder__slider, .shop__slider").slick({
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

  // Calculator
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
    var parents = $(this).parents(".holder-slider__info");
    let summ =
      $(".summ", parents).data("nights") * $(".nights", parents).val() +
      $(".summ", parents).data("guests") * $(".guests", parents).val();
    $(".summ", parents).html(summ);
    // let summ = ($('.guests').val() * $('.summ').data('nights')) * $('.nights').val();
    // $('.summ').html(summ.toFixed(1));
  });

  $(".quantity").each(function () {
    var parents = $(this).parents(".holder-slider__info");
    let summ =
      $(".summ", parents).data("nights") * $(".nights", parents).val() +
      $(".summ", parents).data("guests");
    $(".summ", parents).html(summ);
  });
  // SHOP
  $(".surfboard-box__circle").on("click", function () {
    $(this).toggleClass("active");
  });



// Resize
$(window).resize(function () { 
  if($(window).width() < 610) {
    $('.holder-slider__descr').attr('style','background-image: none');
  } else {
    $('.holder-slider__descr').attr('style','background-image: url(images/virgin.png)');
  }
});

});
