import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  // Pokaži/ skrij ikonco v child komponenti
  showNavButton = false;

  // Animacija Drawerja Modala
  overlayHistory = '';

  overlayOpenHistory() {
    this.overlayHistory = '1';
  }

  overlayCloseHistory() {
    this.overlayHistory = '0';
  }
  // !Animacija Drawerja Konec

  constructor(private breakpointObserver: BreakpointObserver) {}


}
