import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-sidebar-slider',
  templateUrl: './sidebar-slider.component.html',
  styleUrls: ['./sidebar-slider.component.scss']
})
export class SidebarSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.sliderInit()
    this.isMenuAction()
    this.menuItemOnClick()
    this.voidToSubmenus()
  }

  sliderInit(): void {
    $('.hero-banner .owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items: 1,
      mouseDrag: true,
      touchDrag: true,
      margin: 0,
      nav: false,
      dots: false,
      stagePadding: 0,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      smartSpeed: 2500,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  }

  isMenuAction(): void {
    $('.slide-menu-nav>li.has-menu').append("<small class='fa fa-angle-right'></small>");
  }

  menuItemOnClick(): void {
    let itemIcon = $('.slide-menu-nav>li a, .slide-menu-nav>li small')
    $(itemIcon).click(function(this: any) {
        $(this).parent('.slide-menu-nav>li').toggleClass('active');
        $(this).parent('.slide-menu-nav>li').siblings().removeClass('active');
        $(this).parent('.slide-menu-nav>li').siblings().children('.slide-menu-nav>li .submens').slideUp();
        $(this).parent('.slide-menu-nav>li').children('.slide-menu-nav>li .submens').slideToggle();
    });
  }

  voidToSubmenus(): void {
    let element = $('.nav-item.has-menu')
    $(element).each(function(index: any, item: any) {
      $(item).find('a').first().attr("href", "javascript:void(0)")
      console.log();
      
    })
  }

}
