import { NavShowHideButtonDirective } from './navigation/nav-show-hide-button.directive';
import { NavItemDirective } from './navigation/nav-item.directive';
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
import { NavItemTitleComponent } from './navigation/nav-item-title.component';
import { NavContainerComponent } from './navigation/nav-container.component';
import { NavContentComponent } from './navigation/nav-content.component';
import { NavLineComponent } from './navigation/nav-line.component';
import { NavShowHidePanelDirective } from './navigation/nav-show-hide-panel.directive';

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
    DrawerContentComponent,
    NavItemDirective,
    NavItemTitleComponent,
    NavContainerComponent,
    NavContentComponent,
    NavLineComponent,
    NavShowHidePanelDirective,
    NavShowHideButtonDirective
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
    DrawerContentComponent,
    NavItemDirective,
    NavItemTitleComponent,
    NavContainerComponent,
    NavContentComponent,
    NavLineComponent,
    NavShowHidePanelDirective,
    NavShowHideButtonDirective
  ]
})
export class GlobalNavigationModule { }
