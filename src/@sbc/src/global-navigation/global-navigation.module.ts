
import { GlobalNavFooterSpacerDirective } from './global-nav-secondary-item/global-nav-logo-spacer.directive';
import { GlobalNavPrimaryItemDirective } from './global-nav-primary-item/global-nav-primary-item.directive';



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
      GlobalNavigationElementComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
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
    GlobalNavigationElementComponent
  ]
})
export class GlobalNavigationModule { }
