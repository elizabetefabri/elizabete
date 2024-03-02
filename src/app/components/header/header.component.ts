import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
    this.setupMobileMenu();
    this.setupOrientationChange();
    this.setupLinkClicks();
  }

  private setupMobileMenu() {
    const menuMobile = document.querySelector('.menuMobile') as HTMLElement;
    const menuNavUl = document.querySelector('.menu nav ul') as HTMLElement;

    menuMobile.addEventListener('click', () => {
      menuNavUl.style.display = menuNavUl.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  private setupOrientationChange() {
    const ul = document.getElementById('ul') as HTMLElement;
    window.addEventListener('orientationchange', () => {
      ul.style.display = window.innerWidth <= 750 ? 'flex' : 'none';
    });
  }

  private setupLinkClicks() {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach((item) => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 750) {
          const ul = document.getElementById('ul') as HTMLElement;
          ul.style.display = 'none';
        }
      });
    });
  }

  toggleMenu() {
    const menuNavUl = document.querySelector('.menu nav ul') as HTMLElement;
    menuNavUl.style.display = menuNavUl.style.display === 'flex' ? 'none' : 'flex';
  }
}
