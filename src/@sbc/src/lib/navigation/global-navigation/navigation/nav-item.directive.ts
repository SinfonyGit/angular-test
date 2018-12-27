import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[sbcNavItem]'
})
export class NavItemDirective {

    constructor(private el: ElementRef) {
        /*el.nativeElement.style.webkitBoxAlign = 'center';
        el.nativeElement.style.alignItems = 'center';
        el.nativeElement.style.boxSizing = 'border-box';
        el.nativeElement.style.display = 'flex';
        el.nativeElement.style.flexShrink = '0';
        el.nativeElement.style.fontSize = 'inherit';
        el.nativeElement.style.textAlign = 'left';
        el.nativeElement.style.width = '100%';
        el.nativeElement.style.paddingLeft = '12px';
        el.nativeElement.style.paddingRight = '12px';
        el.nativeElement.style.borderWidth = 'initial';
        el.nativeElement.style.borderStyle = 'none';
        el.nativeElement.style.borderColor = 'initial';
        el.nativeElement.style.borderRadius = '3px';
        el.nativeElement.style.outline = 'none';
        el.nativeElement.style.textDecoration = 'none';*/
        el.nativeElement.style.lineHeight = '40px';
        el.nativeElement.style.height = '40px';
     }
}
