import { ModalsModule } from './modals.1/modals.module';
import { DrawersModule } from './drawers.1/drawers.module';


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
    DrawersModule,
    ModalsModule
  ],
  exports: [
    GlobalNavigationModule,
    DrawersModule,
    ModalsModule
  ]
})
export class SbcModule { }
