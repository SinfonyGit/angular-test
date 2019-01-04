import { BreadcrumbComponent } from './breadcrumb.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    BreadcrumbComponent
  ]
})
export class BreadcrumbModule { }
