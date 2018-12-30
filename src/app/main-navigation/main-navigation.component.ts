import { SearchDialogNavigationComponent } from './search-dialog-navigation/search-dialog-navigation.component';
import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {MatDialog} from '@angular/material';

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

  // Zapri menu na ikonici
  closeIconMenu = false;

  // Animacija Drawerja Modala
  overlayHistory = '';

  overlayOpenHistory() {
    this.overlayHistory = '1';
  }

  overlayCloseHistory() {
    this.overlayHistory = '0';
  }

  // !Animacija Drawerja Konec

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.ESC) {
      this.overlayHistory = '0';
    }
  }

  /* @HostListener('keydown') onKeyDown() {
    this.overlayHistory = '0';
  }
 */
  constructor(private breakpointObserver: BreakpointObserver,
              public dialog: MatDialog) {}

  // DIALOG ZA ODPIRANJE DIALOGA NA TRETJI IKONI
  openDialog() {
    const dialogRef = this.dialog.open(SearchDialogNavigationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}

export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40,
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  ESC = 27
}
