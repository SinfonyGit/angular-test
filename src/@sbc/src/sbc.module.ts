import { DrawerModule } from './drawers/drawer.module';
import { MenuModule } from './menu/menu.module';
import { NavigationModule } from './navigation/navigation.module';
import { FunctionsModule } from './functions/functions.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { GlobalNavigationModule } from './global-navigation/global-navigation.module';
import { TestingComponentsModule } from './testing-components/testing-components.module';


@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BreadcrumbModule,
    DrawerModule,
    FunctionsModule,
    GlobalNavigationModule,
    NavigationModule,
    MenuModule,
    TestingComponentsModule
  ],
  exports: [
    BreadcrumbModule,
    DrawerModule,
    FunctionsModule,
    GlobalNavigationModule,
    NavigationModule,
    MenuModule,
    TestingComponentsModule
  ]
})
export class SbcModule { }
