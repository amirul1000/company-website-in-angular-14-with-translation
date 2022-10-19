import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-our-apps',
  templateUrl: './our-apps.component.html',
  styleUrls: ['./our-apps.component.scss']
})
export class OurAppsComponent implements OnInit {


  ngOnInit(): void {
    this.initCarousel()
  }

  initCarousel() {
    $('.owl-carousel.slider-our-apps').owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items:1,
      //mouseDrag: false,
      touchDrag: true,
      margin:30,
      nav:false,
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
