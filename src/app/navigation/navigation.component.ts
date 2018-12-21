import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// ANIMACIJA

import { HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './../animation';
////////////////////////////// ZAKLJUČEK ANIMACIJE

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  isExpanded = false;

  // Pokaži oz skrije navogacijski button glede na lokacijo miške
  showNavButton = false;

  buttonMouseCheckEvent = false;

  // Pokaži oz skrij Ikone v navigacijskem meniju
  showIconTree = false;
  showIconDocumentation = false;

  // Animacija Ikonice v navigacijskem meniju Testing
  isSyncAnimated = false;

  // Pokaži oz skrij navigacijski izbor predmeta
  hideNavContent = false;

  // DropDown animacija in pokazatelj ob kliku na documentation
  dropDownMenu = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  // Spreminjanje Sidebara
  widthSideBar = '241';
  widthSideBarExpanded = '241';
  widthSideBarCollapsed = '21';

  toggleSideBar() {
    if (this.widthSideBar === this.widthSideBarExpanded) {
      this.widthSideBar = this.widthSideBarCollapsed;
      this.showNavButton = true;
    } else {
      this.widthSideBar = this.widthSideBarExpanded;
    }
  }

}
