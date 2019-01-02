import { MatDrawerTest1Component } from './mat-drawer-test.component';
import { FontAwesomeIconsModule } from './../modules/font-awesome-icons.module';
import { DrawerNavigation1Component } from './drawer-navigation1.component';
import { DrawerContent1Component } from './drawer-content1.component';




import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DrawerContainer1Component } from './drawer-container1.component';
import { DrawerTestDirective } from './drawerTest.directive';
import { DrawerTriggerForDirective } from './drawer-trigger-for/drawer-trigger-for.directive';



@NgModule({
  declarations: [
      DrawerContainer1Component,
      DrawerContent1Component,
      DrawerNavigation1Component,
      DrawerTestDirective,
      DrawerTriggerForDirective,
      MatDrawerTest1Component
  ],
  imports: [
    RouterModule,
    BrowserModule,
    MatSidenavModule,
    MatTooltipModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    FontAwesomeIconsModule,
  ],
  exports: [
    DrawerContainer1Component,
    DrawerContent1Component,
    DrawerNavigation1Component,
    DrawerTestDirective,
    DrawerTriggerForDirective,
    MatDrawerTest1Component
  ]
})
export class DrawersModule { }
