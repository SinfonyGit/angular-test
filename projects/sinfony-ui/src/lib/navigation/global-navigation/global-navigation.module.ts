import { MainNavHeaderLogoIconComponent } from './main-nav-components/main-nav-header-logo-icon.component';
import { MainNavFooterIconComponent } from './main-nav-components/main-nav-footer-icon.component';
import { MainNavFooterComponent } from './main-nav-components/main-nav-footer.component';
import { MainNavContentComponent } from './main-nav-components/main-nav-content.component';
import { MainNavHeaderComponent } from './main-nav-components/main-nav-header.component';
import { MainNavContainerComponent } from './main-nav-components/main-nav-container.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DrawerDirective } from './main-nav-drawers/drawer.directive';
import { DrawerContainerComponent } from './main-nav-drawers/drawer-container.component';
import { DrawerNavigationComponent } from './main-nav-drawers/drawer-navigation.component';
import { DrawerContentComponent } from './main-nav-drawers/drawer-content.component';

@NgModule({
  declarations: [
    MainNavContainerComponent,
    MainNavHeaderComponent,
    MainNavHeaderLogoIconComponent,
    MainNavContentComponent,
    MainNavFooterComponent,
    MainNavFooterIconComponent,
    DrawerDirective,
    DrawerContainerComponent,
    DrawerNavigationComponent,
    DrawerContentComponent
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
    MainNavFooterIconComponent,
    DrawerDirective,
    DrawerContainerComponent,
    DrawerNavigationComponent,
    DrawerContentComponent
  ]
})
export class GlobalNavigationModule { }
