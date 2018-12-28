import { FunctionsModule } from './functions/functions.module';
import { MenuModule } from './menu/menu.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SbcUiComponent } from './sbc-ui.component';
import { FormatCodeComponent } from './format-code/format-code.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { GlobalNavigationModule } from './navigation/global-navigation/global-navigation.module';

@NgModule({
  declarations: [
    SbcUiComponent,
    FormatCodeComponent,
    BreadcrumbComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    GlobalNavigationModule,
    MenuModule,
    FunctionsModule
  ],
  exports: [
    SbcUiComponent,
    GlobalNavigationModule,
    MenuModule,
    FormatCodeComponent,
    BreadcrumbComponent,
    FunctionsModule
  ]
})
export class SbcUiModule { }
