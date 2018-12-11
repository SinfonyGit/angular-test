import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SinfonyUiComponent } from './sinfony-ui.component';
import { FormatCodeComponent } from './format-code/format-code.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    SinfonyUiComponent,
    FormatCodeComponent,
    BreadcrumbComponent
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    SinfonyUiComponent,
    FormatCodeComponent,
    BreadcrumbComponent
  ]
})
export class SinfonyUiModule { }
