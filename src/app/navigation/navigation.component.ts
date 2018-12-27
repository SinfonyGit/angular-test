import { Component, Input, OnChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { navigationOverlayAnimation } from '../animations/navigationOverlayAnimation';
import { navigationDrawerAnimation } from '../animations/navigationDrawerAnimation';
import { navigationSlideAnimation } from '../animations/navigationSlideAnimation';


@Component({
  selector: 'app-navigation',
  animations: [ navigationSlideAnimation,
                navigationOverlayAnimation,
                navigationDrawerAnimation ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnChanges {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  // Pokaže oz Skrije navigacijski button iz parent komponente (Main Nav Component)
  // Pokaži oz skrije navogacijski button glede na lokacijo miške
  @Input() showNavButton = false;

  buttonMouseCheckEvent = false;

  // Pokaži oz skrij Ikone v navigacijskem meniju
  showIconTree = false;
  showIconDocumentation = false;

  // Animacija Ikonice v navigacijskem meniju Testing
  isSyncAnimated = false;

  // Pokaži oz skrij navigacijski izbor predmeta
  hideNavContent = false;

  // DropDown animacija in pokazatelj ob kliku na documentation
  dropDownMenuDocumentation = false;
  dropDownMenuTree = false;


  // Zatemnjenost zaslona oz Kontenta ob pritistku na drawer Modal
  // Podatek se dobi od Parent komponente preko Input metode
  @Input() showOverlayHistory: string;
  showOverlay = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  isOpenTwo = true;

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

  toggleNew() {
    this.isOpenTwo = !this.isOpenTwo;
  }

}
