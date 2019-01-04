import { NavItemDirective } from './nav-item.directive';
import { NavContentComponent } from './nav-content.component';
import { NavContainerComponent } from './nav-container.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavItemTitleComponent } from './nav-item-title.component';
import { NavLineComponent } from './nav-line.component';
import { NavShowHideButtonDirective } from './nav-show-hide-button.directive';
import { NavShowHidePanelDirective } from './nav-show-hide-panel.directive';
@NgModule({
  declarations: [
    NavContainerComponent,
    NavContentComponent,
    NavItemTitleComponent,
    NavItemDirective,
    NavLineComponent,
    NavShowHideButtonDirective,
    NavShowHidePanelDirective
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    NavContainerComponent,
    NavContentComponent,
    NavItemTitleComponent,
    NavItemDirective,
    NavLineComponent,
    NavShowHideButtonDirective,
    NavShowHidePanelDirective
  ]
})
export class NavigationModule { }
