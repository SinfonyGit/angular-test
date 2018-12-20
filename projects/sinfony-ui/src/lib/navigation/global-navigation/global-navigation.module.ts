import { MainNavHeaderLogoIconComponent } from './main-nav-header-logo-icon.component';
import { MainNavFooterIconComponent } from './main-nav-footer-icon.component';
import { MainNavFooterComponent } from './main-nav-footer.component';
import { MainNavContentComponent } from './main-nav-content.component';
import { MainNavHeaderComponent } from './main-nav-header.component';
import { MainNavContainerComponent } from './main-nav-container.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
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
    MainNavContainerComponent,
    MainNavHeaderComponent,
    MainNavHeaderLogoIconComponent,
    MainNavContentComponent,
    MainNavFooterComponent,
    MainNavFooterIconComponent
  ]
})
export class GlobalNavigationModule { }
