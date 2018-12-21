import { MenuItemDirective } from './menu-item.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MenuTitleComponent } from './menu-title.component';

@NgModule({
  declarations: [
    MenuTitleComponent,
    MenuItemDirective
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    MenuTitleComponent,
    MenuItemDirective
  ]
})
export class MenuModule { }
