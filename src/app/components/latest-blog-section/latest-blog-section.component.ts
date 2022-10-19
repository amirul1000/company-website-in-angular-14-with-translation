import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-latest-blog-section',
  templateUrl: './latest-blog-section.component.html',
  styleUrls: ['./latest-blog-section.component.scss']
})
export class LatestBlogSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.blogCarouselInit()
  }

  blogCarouselInit() {
    $('.owl-carousel.slider-blogs').owlCarousel({
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn',
      items:2,
      // mouseDrag: false,
      touchDrag: true,
      margin:15,
      nav:true,
      dots:false,
      stagePadding:0,
      autoplay:false,
      autoplayTimeout:2500,
      autoplayHoverPause:true,
      smartSpeed:700,
      loop: false,
      navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
      responsive:{
          0:{
              items:1,
              margin: 25,
              stagePadding: 15
          },
          600:{
              items:1
          },
          1000:{
              items: 3
          }
      }
  });
  }


}
