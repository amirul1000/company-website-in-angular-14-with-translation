import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.openMobileNav()
    this.closeMobileNav()
  }

  openMobileNav(): void {
    $('.mobile-nav').click(function () {
      $('body').toggleClass('open-menu');
    });
  }

  closeMobileNav(): void {
    $('.closeIcn > span, .overlay ').click(function () {
      $('body').removeClass('open-menu');
    });
  }

}
