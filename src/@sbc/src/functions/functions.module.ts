import { FormatCodeComponent } from './format-code/format-code.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TextClipperDirective } from './text/text-clipper.directive';
import { TextEllipsisDirective } from './text/text-ellipsis.directive';
@NgModule({
  declarations: [
    TextClipperDirective,
    TextEllipsisDirective,
    FormatCodeComponent
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    TextClipperDirective,
    TextEllipsisDirective,
    FormatCodeComponent
  ]
})
export class FunctionsModule { }
