import { MenuModule } from './menu/menu.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SinfonyUiComponent } from './sinfony-ui.component';
import { FormatCodeComponent } from './format-code/format-code.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { GlobalNavigationModule } from './navigation/global-navigation/global-navigation.module';

@NgModule({
  declarations: [
    SinfonyUiComponent,
    FormatCodeComponent,
    BreadcrumbComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    GlobalNavigationModule,
    MenuModule
  ],
  exports: [
    SinfonyUiComponent,
    GlobalNavigationModule,
    MenuModule,
    FormatCodeComponent,
    BreadcrumbComponent
  ]
})
export class SinfonyUiModule { }
