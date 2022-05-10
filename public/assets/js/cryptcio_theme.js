;(function ($) {
	'use strict'

	// Blog Slick Slider
	function cryptcioBlogSlickSlider() {
		$('.blog-gallery-zones').slick({
			dots: false,
			arrows: true,
			rtl: false,
			nextArrow:
				'<button class="btn-next"><i class="fa fa-angle-right"></i></button>',
			prevArrow:
				'<button class="btn-prev"><i class="fa fa-angle-left"></i></button>',
			infinite: true,
			autoplay: false,
		})

		$('.blog-grid-5').slick({
			dots: false,
			rtl: false,
			arrows: true,
			nextArrow:
				'<button id="btn-next-project" class="btn-next"><i class="fa fa-angle-right"></i></button>',
			prevArrow:
				'<button id="btn-prev-project"class="btn-prev"><i class="fa fa-angle-left"></i></button>',
			infinite: true,
			autoplay: false,
			autoplaySpeed: 2000,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		})
	}
	//One Page
	function cryptcioOnePage() {
		$(
			'.main-navigation ul.mega-menu > li > a[href*="#"]:not([href="#"]), .site-header .mega-menu .sub-menu li a[href*="#"]:not([href="#"]), .widget_nav_menu .menu li a[href*="#"]:not([href="#"])'
		).on('click', function () {
			jQuery('html').removeClass('openmenu')
			$(
				'.main-navigation ul.mega-menu > li > a[href*="#"]:not([href="#"]), .site-header .mega-menu .sub-menu li a[href*="#"]:not([href="#"]), .widget_nav_menu .menu li a[href*="#"]:not([href="#"])'
			).removeClass('active')
			$(this).addClass('active')
			if (
				location.pathname.replace(/^\//, '') ==
					this.pathname.replace(/^\//, '') ||
				location.hostname == this.hostname
			) {
				var target = $(this.hash),
					target = target.length
						? target
						: $('[name=' + this.hash.slice(1) + ']')

				if (target.length) {
					$('html,body').animate(
						{
							scrollTop: target.offset().top - 90,
						},
						500
					)
					return false
				}
			}
		})
	}
	// Sticky Menu
	function cryptcioStickyMenu() {
		var mn = $('.site-header')
		var mns = 'is-sticky'
		var hdr = $('header').height()
		$(window).scroll(function () {
			if ($(this).scrollTop() > hdr) {
				if ($(window).width() > 991) {
					mn.addClass(mns)
				} else if ($('.site').hasClass('fixed-header')) {
					mn.addClass('no-sticky')
				} else {
					mn.addClass(mns)
				}
			} else {
				mn.removeClass(mns)
				mn.removeClass('no-sticky')
			}
		})
	}

	function jsAnimateMenu1(tog) {
		if (tog == 'open') {
			jQuery('html').addClass('openmenu openmenu-hoz')
		}
		if (tog == 'close') {
			jQuery('html').removeClass('openmenu openmenu-hoz')
		}
	}
	function jsAnimateMenu2(tog) {
		if (tog == 'open') {
			jQuery('html').addClass('openmenu')
		}
		if (tog == 'close') {
			jQuery('html').removeClass('openmenu')
		}
	}

	// Menu
	function cryptcioMenu() {
		// Vertical Menu
		var $bdy = $('html')
		if ($('.site-header').hasClass('header-v3')) {
			$('html').addClass('page-overlay')
		}
		$('.open-menu-mobile').on('click', function (e) {
			$('.overlay').addClass('overlay-menu')
			if ($bdy.hasClass('openmenu')) {
				jsAnimateMenu2('close')
			} else {
				jsAnimateMenu2('open')
				if ($('.site-header').hasClass('header-v3')) {
					$('html').addClass('header-vertical')
				}
			}
		})
		$('.close-menu-mobile').on('click', function (e) {
			if ($bdy.hasClass('openmenu')) {
				jsAnimateMenu2('close')
				if ($('.site-header').hasClass('header-v3')) {
					$('html').removeClass('header-vertical')
				}
			} else {
				jsAnimateMenu2('open')
			}
		})
	}

	// FancyBox
	function cryptcioFancyBox() {
		$('.menu_open_box > a').fancybox({})
		$('img').on('hover', function (e) {
			$(this).data('title', $(this).attr('title')).removeAttr('title')
		})
		$('.iframe_fancybox').fancybox({
			maxWidth: 800,
			maxHeight: 600,
			fitToView: false,
			width: '70%',
			height: '70%',
			autoSize: false,
			closeClick: false,
			openEffect: 'elastic',
			closeEffect: 'none',
		})
		// Choose what buttons to display by default
		$.fancybox.defaults.buttons = ['slideShow', 'fullScreen', 'thumbs', 'close']
		$('[data-fancybox]').fancybox({
			preload: 'auto',
			thumbs: {
				autoStart: true,
			},
		})

		$('.fancybox-zoomcontainer').fancybox({
			helpers: {
				title: {
					type: 'inside',
				},
				buttons: {},
				thumbs: {
					width: 50,
					height: 50,
				},
			},
			afterShow: function () {
				$('.zoomContainer').remove()
				$('img.fancybox-image').elevateZoom({
					zoomType: 'inner',
					cursor: 'crosshair',
					zoomWindowFadeIn: 500,
					zoomWindowFadeOut: 750,
				})
			},
			afterClose: function () {
				$('.zoomContainer').remove()
				$('img.zoom').elevateZoom({
					zoomType: 'inner',
					cursor: 'crosshair',
					zoomWindowFadeIn: 500,
					zoomWindowFadeOut: 750,
				})
			},
		})
	}

	/**
	 * DOMready event.
	 */
	$(document).ready(function () {
		cryptcioStickyMenu()
		cryptcioMenu()
		cryptcioOnePage()
		cryptcioFancyBox()
		cryptcioBlogSlickSlider()
	})
})(jQuery)
