import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[sbcMenuPanel]'
})
export class MenuPanelDirective {

    constructor(private el: ElementRef) {
        el.nativeElement.style.position = 'relative';
        el.nativeElement.style.left = '50px';
        el.nativeElement.style.top = '35px';
        el.nativeElement.style.maxWidth = 'none';
        el.nativeElement.style.minWidth = '300px';
     }

}
