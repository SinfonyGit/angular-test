import { SinfonyUiModule } from './../@sbc';
import { FontAwesomeIconsModule } from './font-awesome-icons.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressFormComponent } from './address-form/address-form.component';


import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DatatableComponent } from './datatable/datatable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { SearchDialogNavigationComponent } from './main-navigation/search-dialog-navigation/search-dialog-navigation.component';
import { SearchDialogComponent } from './main-navigation/search-dialog/search-dialog.component';
import { DocumentationComponent } from './documentation/documentation.component';
// import { SinfonyUiModule } from 'projects/sinfony-ui/src/lib/sinfony-ui.module';
import { TestingUiComponent } from './testing-ui/testing-ui.component';

@NgModule({
   declarations: [
      AppComponent,
      ItemsComponent,
      AddressFormComponent,
      NavigationComponent,
      DatatableComponent,
      DashboardComponent,
      TreeComponent,
      MainNavigationComponent,
      SearchDialogComponent,
      SearchDialogNavigationComponent,
      DocumentationComponent,
      TestingUiComponent
   ],
   imports: [
      BrowserModule,
      FontAwesomeIconsModule,
      FlexLayoutModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      ReactiveFormsModule,
      LayoutModule,
      SinfonyUiModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
