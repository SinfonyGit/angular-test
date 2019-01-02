

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LeftSideModalComponent } from './LeftSide/left-side-modal.component';



@NgModule({
  declarations: [
    LeftSideModalComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    MatSidenavModule,
    MatTooltipModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    LeftSideModalComponent
  ]
})
export class ModalsModule { }
