import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[sbcGlobalNavLogoSpacers]'
})
export class GlobalNavLogoSpacerDirective {
  constructor(private el: ElementRef) {
    // CSS 1
    el.nativeElement.style.paddingBottom = '8px';
  }
}
