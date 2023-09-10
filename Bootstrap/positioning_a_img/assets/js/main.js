(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    //------------ Hero slider -------------

    $(".slider-area").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dot: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    //------------ serbices slider -------------

    $(".service-sliders").owlCarousel({
      loop: true,
      margin: 30,
      center: true,
      nav: true,

      navText: [
        ' <i class="fal fa-long-arrow-left"></i>',
        ' <i class="fal fa-long-arrow-right"></i>',
      ],
      dot: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    //---owl dots number-----

    var i = 1;

    $(".slider-area.owl-carousel .owl-dot").each(function () {
      $(this).text(i);
      i++;
    });

    //------------ our shop slider -------------

    $(".products-slider-container").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: [
        ' <i class="fal fa-long-arrow-left"></i>',
        ' <i class="fal fa-long-arrow-right"></i>',
      ],
      dot: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });

    //------------ doctors slider -------------

    $(".doctors__sliders-container").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: [
        ' <i class="fal fa-long-arrow-left"></i>',
        ' <i class="fal fa-long-arrow-right"></i>',
      ],
      dot: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 4,
        },
      },
    });

    //------------testimonial slider -------------

    $(".testimonials-container").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: [
        ' <i class="fal fa-long-arrow-left"></i>',
        ' <i class="fal fa-long-arrow-right"></i>',
      ],
      dot: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    //------------Counter Up -------------

    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });

    // -----------------VenBox---------------
    $(".venobox_custom").venobox({});
  }); //---document-ready-----
})(jQuery);
