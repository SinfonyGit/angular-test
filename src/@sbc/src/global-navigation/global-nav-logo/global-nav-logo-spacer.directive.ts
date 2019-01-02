import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[sbcGlobalNavLogoSpacer]'
})
export class GlobalNavLogoSpacerDirective {
  constructor(private el: ElementRef) {
    // Pixel distance 8px
    el.nativeElement.style.paddingBottom = '8px';
  }
}
