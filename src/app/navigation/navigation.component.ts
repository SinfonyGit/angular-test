import { NavigationService } from './../../@sbc/src/navigation/navigation.service';
import { ShowOverlayService } from './../../@sbc/src/drawers/show-overlay.service';

import { Component, Input, OnInit } from '@angular/core';
import { navigationOverlayAnimation } from '../animations/navigationOverlayAnimation';
import { navigationDrawerAnimation } from '../animations/navigationDrawerAnimation';
import { navigationSlideAnimation } from '../animations/navigationSlideAnimation';



@Component({
  selector: 'app-navigation',
  animations: [ navigationSlideAnimation,
                navigationOverlayAnimation,
                navigationDrawerAnimation],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private overlay: ShowOverlayService, private navigation: NavigationService) {}

  // Pokaže oz Skrije navigacijski button iz parent komponente (Main Nav Component)
  // Pokaži oz skrije navogacijski button glede na lokacijo miške
  showNavButton: boolean;

  // Pokaži oz skrij Ikone v navigacijskem meniju
  showIconTree = false;
  showIconDocumentation = false;

  // Animacija Ikonice v navigacijskem meniju Testing
  isSyncAnimated = false;

  // Pokaži oz skrij navigacijski izbor predmeta (po domače, pokaži skrij besedilo npr. Documentation, Dashboard, items)
  hideNavContent: boolean;

  // DropDown animacija in pokazatelj ob kliku na documentation
  dropDownMenuDocumentation = false;
  dropDownMenuTree = false;


  // Zatemnjenost zaslona oz Kontenta ob pritistku na drawer Modal
  showOverlay: boolean;

  // Animacija za prikaz navigacijskega SideBara Open/Close
  drawerAnimation: boolean;

  // Spreminjanje Sidebara
  // [style.width.px]="widthSideBar" JE ZAPISANO V obeh <mat-sidenav> TAggah
  widthSideBar: string;


  // Animation TIME
  widthSideBarAnimation: boolean;


  ngOnInit() {
    this.overlay.currentShowOverlay.subscribe(overlay => this.showOverlay = overlay);
    this.navigation.currentShowHideNavButton.subscribe(navigation => this.showNavButton = navigation);
    this.navigation.currentHideNavContent.subscribe(hideNavContent => this.hideNavContent = hideNavContent);
    this.navigation.currentDrawerAnimation.subscribe(drawerAnimation => this.drawerAnimation = drawerAnimation);
    this.navigation.currentwidthSideBarAnimation.subscribe(widthSideBarAnimation => this.widthSideBarAnimation = widthSideBarAnimation);
    this.navigation.currentwidthSideBar.subscribe(widthSideBar => this.widthSideBar = widthSideBar);
  }

  // Alternative za prikaz podmenija
  toggleDocumention() {
    this.dropDownMenuDocumentation = !this.dropDownMenuDocumentation;
  }

  // Prikaz ikonce v Mat-container
  showNavButtonEvent() {
    this.navigation.changeShowHideNavButton(true);
  }

  hideNavButtonEvent() {
    this.navigation.changeShowHideNavButton(false);
  }

}
