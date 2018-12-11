import { SearchDialogComponent } from './../main-navigation/search-dialog/search-dialog.component';
import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {


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

  openDialog1() {
    this.dialog.open(SearchDialogComponent);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


}
