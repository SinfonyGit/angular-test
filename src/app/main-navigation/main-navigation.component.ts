import { SearchDialogNavigationComponent } from './search-dialog-navigation/search-dialog-navigation.component';
import { Component } from '@angular/core';

import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent {

  constructor( public dialog: MatDialog ) {}

  // Zapri menu na ikonici
  closeIconMenu = false;

  // DIALOG ZA ODPIRANJE DIALOGA NA TRETJI IKONI
  openDialog() {
    const dialogRef = this.dialog.open(SearchDialogNavigationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Sporočilo Modalnega okna. Odstrani se v .ts komponenti. Dialog result: ${result}`);
    });
  }

}
