import { Component } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  ngOnInit(): void {
    this.onScroll()
  }

  onScroll(): void {
    let window = $('window')
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0){
          $("header").addClass('sticky');
      }else{
          $("header").removeClass('sticky');
      }
  });
  }

  
}
