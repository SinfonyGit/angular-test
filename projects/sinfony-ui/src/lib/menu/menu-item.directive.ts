import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sbcMenuItem]'
})
export class MenuItemDirective {
    constructor(private el: ElementRef) {
        el.nativeElement.style.webkitBoxAlign = 'center';
        el.nativeElement.style.alignItems = 'center';
        el.nativeElement.style.boxSizing = 'border-box';
        el.nativeElement.style.cursor = 'pointer';
        el.nativeElement.style.display = 'flex';
        el.nativeElement.style.backgroundColor = 'white';
        el.nativeElement.style.color = 'rgb(23, 43, 77)';
        el.nativeElement.style.fill = 'rgb(255, 255, 255)';
        el.nativeElement.style.overflow = 'hidden';
        el.nativeElement.style.borderRadius = '0px';
        el.nativeElement.style.flex = '0 0 auto';
        el.nativeElement.style.textCecoration = 'none';
        el.nativeElement.style.lineHeight = '30px';
        el.nativeElement.style.height = '30px';
        el.nativeElement.style.border = 'none';
        el.nativeElement.style.padding = '0 16px';
        el.nativeElement.style.width = '100%';
        el.nativeElement.style.outline = '0';
        el.nativeElement.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
        el.nativeElement.style.fontSize = '14px';
        el.nativeElement.style.fontStyle = 'normal';
        el.nativeElement.style.fontWeight = '400';
        el.nativeElement.style.lineHeight = '1.42857142857143';
     }

     @HostListener('mouseenter') onMouseEnter() {
      this.el.nativeElement.style.background = 'rgba(0,0,0,.04)';
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.el.nativeElement.style.background = 'white';
    }

    @HostListener('mousedown') onMouseDown() {
      this.el.nativeElement.style.backgroundColor = 'rgb(179, 212, 255)';
    }

    @HostListener('mouseup') onMouseUp() {
      this.el.nativeElement.style.backgroundColor = 'white';
    }

}
