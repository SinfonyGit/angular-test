import { MatSidenavDirective } from './global-side-nav/mat-sidenav.directive';
import { GlobalSideNavigationComponent } from './global-side-nav/global-side-nav.component';
import { GlobalNavigationContentComponent } from './global-nav-content/global-nav-content.component';
import { GlobalNavigationContainerComponent } from './global-nav-container/global-nav-container.component';
import { NavContainerCopyComponent } from './SubNavigationCopy/nav-container.component';
import { NavigationCopyComponent } from './SubNavigationCopy/navigation.component';
import { GlobalNavFooterSpacerDirective } from './global-nav-secondary-item/global-nav-logo-spacer.directive';
import { GlobalNavPrimaryItemDirective } from './global-nav-primary-item/global-nav-primary-item.directive';


import { FontAwesomeIconsModule } from './../modules/font-awesome-icons.module';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GlobalNavigationComponent } from './global-nav/global-nav.component';
import { GlobalNavigationHeaderComponent } from './global-nav-header/global-nav.component';
import { GlobalNavFooterComponent } from './global-nav-footer/global-nav-footer.component';
import { GlobalNavLogoDirective } from './global-nav-logo/global-nav-logo.directive';
import { GlobalNavLogoSpacerDirective } from './global-nav-logo/global-nav-logo-spacer.directive';
import { GlobalNavSecondaryItemDirective } from './global-nav-secondary-item/global-nav-secondary-item.directive';
import { NavItemTitleCopyComponent } from './SubNavigationCopy/nav-item-title.component';
import { GlobalNavigationElementComponent } from './global-nav-element/global-nav-element.component';



@NgModule({
  declarations: [
      GlobalNavigationComponent,
      GlobalNavigationHeaderComponent,
      GlobalNavFooterComponent,
      GlobalNavLogoDirective,
      GlobalNavLogoSpacerDirective,
      GlobalNavPrimaryItemDirective,
      GlobalNavSecondaryItemDirective,
      GlobalNavFooterSpacerDirective,
      NavigationCopyComponent,
      NavItemTitleCopyComponent,
      NavContainerCopyComponent,
      GlobalNavigationContainerComponent,
      GlobalNavigationContentComponent,
      GlobalSideNavigationComponent,
      MatSidenavDirective,
      GlobalNavigationElementComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FontAwesomeIconsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    GlobalNavigationComponent,
    GlobalNavigationHeaderComponent,
    GlobalNavFooterComponent,
    GlobalNavLogoDirective,
    GlobalNavLogoSpacerDirective,
    GlobalNavPrimaryItemDirective,
    GlobalNavSecondaryItemDirective,
    GlobalNavFooterSpacerDirective,
    NavigationCopyComponent,
    NavItemTitleCopyComponent,
    NavContainerCopyComponent,
    GlobalNavigationContainerComponent,
    GlobalNavigationContentComponent,
    GlobalSideNavigationComponent,
    MatSidenavDirective,
    GlobalNavigationElementComponent
  ]
})
export class GlobalNavigationModule { }
