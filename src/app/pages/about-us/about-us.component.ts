import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initCarousel()
  }

  initCarousel() {
    $('.owl-carousel.slider-board-directors').owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items:1,
      //mouseDrag: false,
      touchDrag: false,
      //margin:30,
      nav:true,
      dots:false,
      stagePadding:0,
      autoplay:true,
      autoplayTimeout:2500,
      autoplayHoverPause:true,
      smartSpeed:1000,
      loop: true,
      navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  });
  
  
  }

}
