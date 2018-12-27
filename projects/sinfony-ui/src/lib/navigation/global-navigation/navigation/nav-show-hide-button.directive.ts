import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sbcNavShowHideButton]'
})
export class NavShowHideButtonDirective {

    constructor(private el: ElementRef) {
        el.nativeElement.style.boxShadow = 'rgba(9, 30, 66, 0.08) 0px 0px 0px 1px, rgba(9, 30, 66, 0.08) 0px 2px 4px 1px';
        el.nativeElement.style.color = 'rgb(107, 119, 140)';
        el.nativeElement.style.cursor = 'pointer';
        el.nativeElement.style.height = '24px';
        el.nativeElement.style.position = 'fixed';
        el.nativeElement.style.top = '32px';
        el.nativeElement.style.transform = 'translate(-50%)';
        el.nativeElement.style.width = '24px';
        el.nativeElement.style.background = '0px center white';
        el.nativeElement.style.borderWidth = '0px';
        el.nativeElement.style.borderStyle = 'initial';
        el.nativeElement.style.borderColor = 'initial';
        el.nativeElement.style.borderRadius = '50%';
        el.nativeElement.style.outline = '0px';
        el.nativeElement.style.padding = '0px';
     }

     @HostListener('mouseenter') onMouseEnter() {
      this.el.nativeElement.style.transition = '0.3s';
      this.el.nativeElement.style.backgroundColor = 'rgb(76, 154, 255)';
      this.el.nativeElement.style.color = 'white';
    }
    /* transition: width 2s */
    @HostListener('mouseleave') onMouseLeave() {
      this.el.nativeElement.style.transition = '0.2s';
      this.el.nativeElement.style.backgroundColor = 'white';
      this.el.nativeElement.style.color = 'rgb(107, 119, 140)';
    }

    @HostListener('mouseup') onMouseUp() {
      this.el.nativeElement.style.transition = '0.2s';
      this.el.nativeElement.style.backgroundColor = 'white';
      this.el.nativeElement.style.color = 'rgb(107, 119, 140)';
    }
}
