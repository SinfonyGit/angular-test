import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[sbcGlobalNavFooterSpacer]'
})
export class GlobalNavFooterSpacerDirective {
  constructor(private el: ElementRef) {
    // CSS 1
    el.nativeElement.style.paddingTop = '8px';
  }
}
