$(function () {

    //    preloader

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    //    here js for sticky menubar

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $(".navbar").removeClass("sticky");
        } else {
            $(".navbar").addClass("sticky");
        }
    });

    //==== animate wow js

    var wow = new WOW(
        {
          boxClass:     'wow',
          animateClass: 'animated',
          offset:       0,
          mobile:       true,
          live:         true,
          scrollContainer: null,
          resetAnimation: true,  
        }
      );
      wow.init();

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300
    });

    //    banner slide section

    $('.banner-slide').slick({
        arrows: true,
        prevArrow: ".left-arrow",
        nextArrow: ".right-arrow",
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    //    js for counter

    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({
            countNum: $this.text()
        }).animate({
                countNum: countTo
            },

            {

                duration: 3000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
    });

    //==== Show or hide the sticky back-to-top button

    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 500) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 500);
    });

});
