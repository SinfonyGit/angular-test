

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GlobalNavigationModule } from './global-navigation/global-navigation.module';


@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule,
    BrowserModule,
    GlobalNavigationModule,
  ],
  exports: [
    GlobalNavigationModule,
  ]
})
export class SbcModule { }
