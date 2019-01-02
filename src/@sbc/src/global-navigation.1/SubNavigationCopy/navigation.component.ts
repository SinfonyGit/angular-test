import { navigationOverlayAnimation } from './../../../../app/animations/navigationOverlayAnimation';

import { Component, Input, OnChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { navigationDrawerAnimation } from './../../../../app/animations/navigationDrawerAnimation';
import { navigationSlideAnimation } from './../../../../app/animations/navigationSlideAnimation';


@Component({
  selector: 'sbc-navigation-copy',
  animations: [ navigationSlideAnimation,
                navigationOverlayAnimation,
                navigationDrawerAnimation],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationCopyComponent implements OnChanges {

  constructor(private breakpointObserver: BreakpointObserver) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

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
  @Input() showOverlayHistory: string;
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
  //    setTimeout(() => {
        this.widthSideBar = this.widthSideBarCollapsed;
        this.showNavButton = true;
  //    }, 150);
    } else {
      // Ob odpiranju navigacije | Closed => Open |
  //    setTimeout(() => {
        this.widthSideBar = this.widthSideBarExpanded;
  //    }, 50);

    }
  }

  ngOnChanges() {
    // Zatemnitev ekrana
    if (this.showOverlayHistory === '1') {
      this.showOverlay = true;
      }
    if (this.showOverlayHistory === '0') {
        this.showOverlay = false;
    }
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
