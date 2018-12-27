import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[sbcNavShowHidePanel]'
})
export class NavShowHidePanelDirective {

    constructor(private el: ElementRef) {
        el.nativeElement.style.position = 'relative';
        el.nativeElement.style.width = '24px';
        el.nativeElement.style.backgroundColor = '#fafafa%';

        el.nativeElement.style.webkitBoxAlign = 'center';
        el.nativeElement.style.alignItems = 'center';
        el.nativeElement.style.boxSizing = 'border-box';
        el.nativeElement.style.color = 'rgb(66, 82, 110)';
        el.nativeElement.style.display = 'flex';
        el.nativeElement.style.flexShrink = '0';
        el.nativeElement.style.flexDirection = 'column';
        el.nativeElement.style.height = '100vh';
        el.nativeElement.style.paddingBottom = '16px';
        el.nativeElement.style.paddingBottom = '16px';
        el.nativeElement.style.paddingTop = '24px';



     }
}
