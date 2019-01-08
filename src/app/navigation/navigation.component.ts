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

  message: string;

  constructor(private overlay: ShowOverlayService) {}

  // Pokaže oz Skrije navigacijski button iz parent komponente (Main Nav Component)
  // Pokaži oz skrije navogacijski button glede na lokacijo miške
  @Input() showNavButton = false;

  // Pokaži oz skrij Ikone v navigacijskem meniju
  showIconTree = false;
  showIconDocumentation = false;

  // Animacija Ikonice v navigacijskem meniju Testing
  isSyncAnimated = false;

  // Pokaži oz skrij navigacijski izbor predmeta (po domače, pokaži skrij besedilo npr. Documentation, Dashboard, items)
  hideNavContent = false;

  // DropDown animacija in pokazatelj ob kliku na documentation
  dropDownMenuDocumentation = false;
  dropDownMenuTree = false;


  // Zatemnjenost zaslona oz Kontenta ob pritistku na drawer Modal
  // Podatek se dobi od Parent komponente preko Input metode
  // @Input() showOverlayHistory: string;
  showOverlay = false;

  // Animacija za prikaz navigacijskega SideBara Open/Close
  drawerAnimation = true;

  // Spreminjanje Sidebara
  // [style.width.px]="widthSideBar" JE ZAPISANO V obeh <mat-sidenav> TAggah
  widthSideBar = '241';
  widthSideBarExpanded = '241';
  widthSideBarCollapsed = '21';

  // Animation TIME
  widthSideBarAnimation = false;

  toggleSideBar() {
    if (this.widthSideBar === this.widthSideBarExpanded) {
      // Ob zapiranju navigacije | Open => Closed |
        this.widthSideBar = this.widthSideBarCollapsed;
        this.showNavButton = true;
    } else {
      // Ob odpiranju navigacije | Closed => Open |
        this.widthSideBar = this.widthSideBarExpanded;
    }
  }

  ngOnInit() {
    this.overlay.currentShowOverlay.subscribe(overlay => this.showOverlay = overlay);
  }

  // Alternative za prikaz podmenija
  toggleDocumention() {
    this.dropDownMenuDocumentation = !this.dropDownMenuDocumentation;
  }

  // Animacija za prikaz navigacijskega SideBara Open/Close
  toggleDrawerAnimation() {
    this.drawerAnimation = !this.drawerAnimation;
  }

  // Toggler za prikaz in skritje besedila ob zapiranju in odpiranju NavBara
  toggleHideNavContent() {
    // Ob zapiranju navigacije | Open => Closed |
    if (this.hideNavContent === false) {
      setTimeout(() => {
      this.hideNavContent = true;
    }, 500);
    } else {
      // Ob odpiranju navigacije | Closed => Open |
      setTimeout(() => {
        this.hideNavContent = false;
      }, 200);
    }
  }

    // Animation TIME
    toggleWidthSideBarAnimation() {
      this.widthSideBarAnimation = true;
    }


}
