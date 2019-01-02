import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[sbcDrawerTest]'
})
export class DrawerTestDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'white';
        el.nativeElement.style.display = 'flex';
        el.nativeElement.style.height = '100vh';
        el.nativeElement.style.left = '0px';
        el.nativeElement.style.position = 'fixed';
        el.nativeElement.style.top = '0px';
        el.nativeElement.style.width = '600px';
        el.nativeElement.style.zIndex = '501';
        el.nativeElement.style.overflow = 'hidden';
     }
}
