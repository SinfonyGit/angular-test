import { NgModule } from '@angular/core';
import { SinfonyUiComponent } from './sinfony-ui.component';
import { FormatCodeComponent } from './format-code/format-code.component';

@NgModule({
  declarations: [
    SinfonyUiComponent,
    FormatCodeComponent
  ],
  imports: [
  ],
  exports: [
    SinfonyUiComponent,
    FormatCodeComponent
  ]
})
export class SinfonyUiModule { }
