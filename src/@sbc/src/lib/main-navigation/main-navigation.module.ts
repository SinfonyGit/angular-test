import { FontAwesomeIconsModule } from './../../modules/font-awesome-icons.module';

import { GlobalNavHeaderTestComponent } from './global-nav-header-test/global-nav-header-test.component';
import { GlobalNavFooterSpacerDirective } from './global-nav-footer/global-nav-logo-spacer.directive';
import { GlobalNavFooterComponent } from './global-nav-footer/global-nav-header.component';
import { GlobalNavHeaderComponent } from './global-nav-logo/global-nav-header.component';
import { GlobalNavLogoDirective } from './global-nav-logo/global-nav-logo.directive';
// import { GlobalNavigationHeaderTestComponent } from './global-nav-header/global-nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GlobalNavigationComponent } from './global-nav/global-nav.component';
import { GlobalNavLogoSpacerDirective } from './global-nav-logo/global-nav-logo-spacer.directive';
import { GlobalNavPrimaryItemDirective } from './global-nav-primary/global-nav-primary-item.directive';
import { GlobalNavSecondaryItemDirective } from './global-nav-secondary/global-nav-secondary-item.directive';



@NgModule({
  declarations: [
      GlobalNavigationComponent,
      GlobalNavLogoDirective,
      GlobalNavLogoSpacerDirective,
      GlobalNavFooterSpacerDirective,
      GlobalNavHeaderComponent,
      GlobalNavPrimaryItemDirective,
      GlobalNavSecondaryItemDirective,
      GlobalNavFooterComponent,
      GlobalNavHeaderTestComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    MatSidenavModule,
    MatTooltipModule,
    FontAwesomeIconsModule,
    MatButtonModule
  ],
  exports: [
    GlobalNavigationComponent,
    GlobalNavLogoDirective,
    GlobalNavLogoSpacerDirective,
    GlobalNavFooterSpacerDirective,
    GlobalNavHeaderComponent,
    GlobalNavPrimaryItemDirective,
    GlobalNavSecondaryItemDirective,
    GlobalNavFooterComponent,
    GlobalNavHeaderTestComponent
  ]
})
export class MainNavigationModule { }
