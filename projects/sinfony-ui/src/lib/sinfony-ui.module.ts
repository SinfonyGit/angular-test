import { MainNavHeaderLogoIconComponent } from './navigation/global-navigation/main-nav-header-logo-icon.component';
import { MainNavFooterIconComponent } from './navigation/global-navigation/main-nav-footer-icon.component';
import { MainNavFooterComponent } from './navigation/global-navigation/main-nav-footer.component';
import { MainNavContentComponent } from './navigation/global-navigation/main-nav-content.component';
import { MainNavHeaderComponent } from './navigation/global-navigation/main-nav-header.component';
import { MainNavContainerComponent } from './navigation/global-navigation/main-nav-container.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SinfonyUiComponent } from './sinfony-ui.component';
import { FormatCodeComponent } from './format-code/format-code.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    SinfonyUiComponent,
    FormatCodeComponent,
    BreadcrumbComponent,
    MainNavContainerComponent,
    MainNavHeaderComponent,
    MainNavHeaderLogoIconComponent,
    MainNavContentComponent,
    MainNavFooterComponent,
    MainNavFooterIconComponent
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    SinfonyUiComponent,
    FormatCodeComponent,
    BreadcrumbComponent,
    MainNavContainerComponent,
    MainNavHeaderComponent,
    MainNavHeaderLogoIconComponent,
    MainNavContentComponent,
    MainNavFooterComponent,
    MainNavFooterIconComponent
  ]
})
export class SinfonyUiModule { }
