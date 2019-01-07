import { ColorThemeRandomDirective } from './color-theme-random.directive';
import { ColorThemeDirective } from './color-theme.directive';

import { NavButtonTestDirective } from './nav-button-test.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavButtonTestDirective,
    ColorThemeDirective,
    ColorThemeRandomDirective
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    NavButtonTestDirective,
    ColorThemeDirective,
    ColorThemeRandomDirective
  ]
})
export class TestingComponentsModule { }
