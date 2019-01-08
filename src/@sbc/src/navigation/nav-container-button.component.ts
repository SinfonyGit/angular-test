import { NavigationService } from './navigation.service';
import { Component, OnInit } from '@angular/core';

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
/* <fa-icon [icon]="faArrowLeft" size="lg"></fa-icon> */
@Component({
  selector: 'sbc-nav-container-button',
  template: `
    <div
      sbcNavShowHidePanel
      style="z-index: 306;"
      (mouseenter)="showNavButton()"
      (mouseleave)="hideNavButton()"
    >
      <button
        *ngIf="showHideButton"
        sbcNavShowHideButton
        style="z-index: 307;"
        mat-icon-button
        type="button"
        aria-label="Toggle sidenav"
        (click)="toggleSideBar()"
        (click)="toggleHideNavContent()"
        (click)="toggleDrawerAnimation()"
        (click)="toggleWidthSideBarAnimation()"
      >
        <fa-icon
          *ngIf="hideNavContent"
          [icon]="faBars"
          [fixedWidth]="true"
          class="iconBars"
        ></fa-icon>
        <fa-icon
          *ngIf="!hideNavContent"
          [icon]="faAngleLeft"
          [fixedWidth]="true"
          class="iconArrowLeft"
        ></fa-icon>
      </button>
    </div>
  `,
  styles: [
    `
      .iconBars {
        position: relative;
        /* bottom: 7px; */
        /*
        (click)="toggleSideBar()"
        (click)="toggleHideNavContent()"
        (click)="toggleDrawerAnimation()"
        (click)="toggleWidthSideBarAnimation()"
         */
      }
      .iconArrowLeft {
        position: relative;
        /* bottom: 7px; */
        right: 1px;
      }
    `
  ]
})
export class NavContainerButtonComponent implements OnInit {
  faAngleLeft = faAngleLeft;
  faBars = faBars;

  showHideButton: boolean;

  hideNavContent: boolean;

  drawerAnimation: boolean;

  widthSideBarAnimation: boolean;

  widthSideBar: string;
  widthSideBarExpanded: string;
  widthSideBarCollapsed: string;

  constructor(private navigation: NavigationService) {}

  showNavButton() {
    this.navigation.changeShowHideNavButton(true);
  }

  hideNavButton() {
    this.navigation.changeShowHideNavButton(false);
  }

  ngOnInit() {
    this.navigation.currentShowHideNavButton.subscribe(
      showHideButton => (this.showHideButton = showHideButton)
    );
    this.navigation.currentHideNavContent.subscribe(
      hideNavContent => (this.hideNavContent = hideNavContent)
    );
    this.navigation.currentDrawerAnimation.subscribe(
      drawerAnimation => (this.drawerAnimation = drawerAnimation)
    );
    this.navigation.currentwidthSideBarAnimation.subscribe(
      widthSideBarAnimation =>
        (this.widthSideBarAnimation = widthSideBarAnimation)
    );
    this.navigation.currentwidthSideBar.subscribe(
      widthSideBar =>
        (this.widthSideBar = widthSideBar)
    );
  }

  toggleSideBar() {
    if (this.widthSideBar === '241') {
      // Ob zapiranju navigacije | Open => Closed |
        this.navigation.changeWidthSideBar('21');
        this.navigation.changeShowHideNavButton(true);
        // this.widthSideBar = this.widthSideBarCollapsed;
        // this.showNavButton = true;
    } else if (this.widthSideBar === '21') {
      // Ob odpiranju navigacije | Closed => Open |
      this.navigation.changeWidthSideBar('241');
        // this.widthSideBar = this.widthSideBarExpanded;
    }
  }

  // Toggler za prikaz in skritje besedila ob zapiranju in odpiranju NavBara
  toggleHideNavContent() {
    // Ob zapiranju navigacije | Open => Closed |
    if (this.hideNavContent === false) {
      setTimeout(() => {
        this.navigation.changeHideNavContent(true);
        // this.hideNavContent = true;
      }, 500);
    } else {
      // Ob odpiranju navigacije | Closed => Open |
      setTimeout(() => {
        this.navigation.changeHideNavContent(false);
        // this.hideNavContent = false;
      }, 200);
    }
  }

  // Animacija za prikaz navigacijskega SideBara Open/Close
  toggleDrawerAnimation() {
    if (this.drawerAnimation === false) {
      this.navigation.changeDrawerAnimation(true);
    } else if (this.drawerAnimation === true) {
      this.navigation.changeDrawerAnimation(false);
    }
  }

  // Animation TIME
  toggleWidthSideBarAnimation() {
    this.navigation.changeWidthSideBarAnimation(true);
  }
}
