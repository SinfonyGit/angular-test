import { Directive, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[sbc-menutest]'
})
export class MenuTestDirective {
  constructor(public viewContainer: ViewContainerRef) { }
}