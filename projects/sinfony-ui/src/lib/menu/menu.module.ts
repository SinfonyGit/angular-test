import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { MenuTestDirective } from './menu-test.directive';

@NgModule({
  declarations: [
    MenuComponent,
    MenuTestDirective
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    MenuComponent,
    MenuTestDirective
  ]
})
export class MenuModule { }
