import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})

export class MenuBarComponent implements OnInit {
  hamburger: HTMLElement | null;
  navMenu: HTMLElement | null;
  isHamburgerActive: boolean;
 
  constructor() {
    this.hamburger = null;
    this.navMenu = null;
    this.isHamburgerActive = false;
   }

   ngOnInit(): void {
    this.hamburger = document.querySelector(".hamburger");
    this.navMenu = document.querySelector(".nav-list");

    if (this.hamburger && this.navMenu) {
      this.hamburger.addEventListener("click", () => {
        this.toggleHamburger();
      });

      document.querySelectorAll(".nav-link").forEach((n) => {
        n.addEventListener("click", () => {
          this.closeHamburger();
        });
      });
    }
  }

  toggleHamburger() {
    this.isHamburgerActive = !this.isHamburgerActive;
    this.hamburger!.classList.toggle("active");
    this.navMenu!.classList.toggle("active");
  }

  closeHamburger() {
    this.isHamburgerActive = false;
    this.hamburger!.classList.remove("active");
    this.navMenu!.classList.remove("active");
  }
  @HostListener('window:scroll')
  onScroll() {
    if (this.isHamburgerActive) {
      this.closeHamburger();
    }
  }
}