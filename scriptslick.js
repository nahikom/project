$(document).ready(function () {
    $(".review-slider").slick({
        infinite: true,
        speed: 300,
        prevArrow: $("#review-prev"),
        nextArrow: $("#review-next"),
        fade: true,
        swipe: false,
        draggable: false,
        slidesToShow: 1,
        adaptiveHeight: true
    });
  
    $(".review-slider").on(
        "afterChange",
        function (ignore, slick, currentSlide) {
            console.log(slick);
            $("#review-number").text("0" + (currentSlide + 1));
        }
    );
  });
      $(document).on('ready', function() {
        $('.rewiews_slider').slick({
          infinite: true,
          adaptiveHeight: true,
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
      
        });
      });
      $(document).on('ready', function() {
        $('.worked_with_us_slider1').slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
      });
      
      $(document).on('ready', function() {
        $('.worked_with_us_slider2').slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
      });
      $("#slider-1").slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10%",
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
           {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }]
    });
  
    $("#slider-2").slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10%",
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
           {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }]
    });