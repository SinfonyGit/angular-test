import { MenuModule } from './menu/menu.module';
import { MainNavHeaderLogoIconComponent } from './navigation/global-navigation/main-nav-header-logo-icon.component';
import { MainNavFooterIconComponent } from './navigation/global-navigation/main-nav-footer-icon.component';
import { MainNavFooterComponent } from './navigation/global-navigation/main-nav-footer.component';
import { MainNavHeaderComponent } from './navigation/global-navigation/main-nav-header.component';
import { MainNavContainerComponent } from './navigation/global-navigation/main-nav-container.component';

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
