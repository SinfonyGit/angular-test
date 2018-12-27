import { SearchDialogNavigationComponent } from './../main-navigation/search-dialog-navigation/search-dialog-navigation.component';
import { navigationAnimation, navigationAnimationBackup } from './customAnimation';
import { SearchDialogComponent } from './../main-navigation/search-dialog/search-dialog.component';
import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material';
import { navigationDrawerAnimation } from '../animations/navigationDrawerAnimation';


@Component({
  selector: 'app-items',
  animations: [ navigationAnimation, navigationAnimationBackup, navigationDrawerAnimation ],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  isOpen = true;
  isOpenTwo = true;

  isAnimation = false;

   tabela: any[] = [
    { 'link': '/../items', 'name': 'Itemsi' },
    { 'link': '', 'name': 'vstopna' },
];

  classname = 'colors:danger button';

    menuBreadCrumb = 'vstop2';

  animal = 'lol';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  toggleNew() {
    this.isOpenTwo = !this.isOpenTwo;
  }

  toggleAnimation() {
    this.isAnimation = !this.isAnimation;
  }

  openDialog1() {
    this.dialog.open(SearchDialogComponent);
  }

  openDialog() {
    const dialogRef = this.dialog.open(SearchDialogNavigationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
