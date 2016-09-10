
// ==== MAIN ==== //

// A simple wrapper for all your custom jQuery; everything in this file will be run on every page
;(function($){
  $(function(){

    /**
     * Initialize vars
     * @type {int,string,boolean}
    */

    var scrollArrow = $('.scroll-target');


    /**
     * Initialize plugins
    */

    // Bootstrap
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();


    /**
     * Initialize functions
    */

    // smoothScroll mini-plugin
    function smoothScroll(target) {
      $('body,html').animate(
        {'scrollTop': target.offset().top - 80},
        500
      );
    }
    //smooth scroll active
    scrollArrow.on('click', function(e){
      e.preventDefault();
      smoothScroll($(this.hash));
    });

    // use <a href="#section2" class="scroll-target">Scroll to</a>


    /**
     * Dom events run
    */

    // scrolling
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        console.log('active menu scroll');
      } else {
        console.log('disable menu scroll');
        
      }
    });

  });
}(jQuery));
