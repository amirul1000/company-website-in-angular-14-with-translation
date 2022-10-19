
jQuery('.mobile-nav ').click(function () {
	jQuery('body').toggleClass('open-menu');
});

jQuery('.closeIcn > span, .overlay ').click(function () {
	jQuery('body').removeClass('open-menu');
});


jQuery('.slide-menu-nav>li.has-menu').append("<small class='fal fa-angle-right'></small>");

jQuery('.slide-menu-nav>li small').click(function(){
    jQuery(this).parent('.slide-menu-nav>li').toggleClass('active');
    jQuery(this).parent('.slide-menu-nav>li').siblings().removeClass('active');
    jQuery(this).parent('.slide-menu-nav>li').siblings().children('.slide-menu-nav>li ul').slideUp();
    jQuery(this).parent('.slide-menu-nav>li').children('.slide-menu-nav>li ul').slideToggle();
});
    

$(window).scroll(function () {
    if ($(window).scrollTop() > 0){
        $("header").addClass('sticky');
    }else{
        $("header").removeClass('sticky');
    }
});

$('.hero-banner .owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    mouseDrag: false,
    touchDrag: false,
    margin:0,
    nav:false,
    dots:true,
    stagePadding:0,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    smartSpeed:2500,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.owl-carousel.slider-blogs').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    //mouseDrag: false,
    //touchDrag: false,
    //margin:30,
    nav:true,
    dots:false,
    stagePadding:0,
    autoplay:false,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    smartSpeed:2500,
    loop: true,
    navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

$('.owl-carousel.slider-board-directors').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    //mouseDrag: false,
    //touchDrag: false,
    //margin:30,
    nav:true,
    dots:false,
    stagePadding:0,
    autoplay:false,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    smartSpeed:2500,
    loop: true,
    navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

