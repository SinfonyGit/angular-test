import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DrawerContainerComponent } from './drawer-container.component';
import { DrawerContentComponent } from './drawer-content.component';
import { DrawerNavigationComponent } from './drawer-navigation.component';
import { DrawerDirective } from './drawer.directive';

@NgModule({
  declarations: [
    DrawerContainerComponent,
    DrawerContentComponent,
    DrawerNavigationComponent,
    DrawerDirective
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    DrawerContainerComponent,
    DrawerContentComponent,
    DrawerNavigationComponent,
    DrawerDirective
  ]
})
export class DrawerModule { }
