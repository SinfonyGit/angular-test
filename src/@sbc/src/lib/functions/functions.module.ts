import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TextClipperDirective } from './text/text-clipper.directive';
import { TextEllipsisDirective } from './text/text-ellipsis.directive';
@NgModule({
  declarations: [
    TextClipperDirective,
    TextEllipsisDirective
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    TextClipperDirective,
    TextEllipsisDirective
  ]
})
export class FunctionsModule { }
