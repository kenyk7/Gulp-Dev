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

		// scroll target id mini plugin use var scrollArrow
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
		
		// slick
		var slickFulled = $('.slick-fulled');
		// slickFulled.slick({
		// 	dots: true,
		// 	fade: true,
		// 	arrows: false,
		// 	infinite: true,
		// 	autoplay: true,
		// 	autoplaySpeed: 5000,
		// 	speed: 1000,
		// 	slidesToShow: 1,
		// 	slidesToScroll: 1,
		// 	adaptiveHeight: false,
		// 	responsive: [
		// 		{
		// 			breakpoint: 767,
		// 			settings: {
		// 				fade: false
		// 			}
		// 		}
		// 	]
		// });
		
		// new WOW().init();

		/**
		 * Initialize functions
		*/


		/**
		 * Dom events run
		*/

		if ($(window).width() < 768) {
			$('.ws').css('height', window.innerHeight + 'px');
		}

		// scrolling
		$(window).scroll(function () {
			if ($(this).scrollTop() > 70) {
				$('.navbar-fixed-top').addClass('navbar-scroll').removeClass('navbar-transparent');
			} else {
				$('.navbar-fixed-top').removeClass('navbar-scroll').addClass('navbar-transparent');
			}
		});

		$(".navbar-toggle").on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			if($(window).scrollTop() < 70){
				$('.navbar-fixed-top').toggleClass('navbar-transparent');
			}
		});

		// center modal
		function setModalMaxHeight(element) {
			this.$element     = $(element);  
			this.$content     = this.$element.find('.modal-content');
			var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
			var dialogMargin  = $(window).width() < 768 ? 20 : 60;
			var contentHeight = $(window).height() - (dialogMargin + borderWidth);
			var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
			var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
			var maxHeight     = contentHeight - (headerHeight + footerHeight);

		 	this.$content.css({
				'overflow': 'hidden'
		 	});
		  
		 	this.$element
			.find('.modal-body').css({
			  'max-height': maxHeight,
			  'overflow-y': 'auto'
			});
		}

		$('.modal').on('show.bs.modal', function() {
		 	$(this).show(); 
		 	setModalMaxHeight(this);
		});

		$(window).resize(function() {
		 	if ($('.modal.in').length == 1) {
				setModalMaxHeight($('.modal.in'));
		  	}
		});
		// end center modal

	});
}(jQuery));
