import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sbcMatSideNav]'
})
export class MatSidenavDirective {
  constructor(private el: ElementRef) {

    /* el.nativeElement.style.webkitBoxAlign = 'center';
    el.nativeElement.style.alignItems = 'center';
    el.nativeElement.style.color = 'rgb(255, 255, 255)';
    el.nativeElement.style.cursor = 'pointer';
    el.nativeElement.style.display = 'flex';
    el.nativeElement.style.fontSize = 'inherit';
    el.nativeElement.style.webkitBoxPack = 'center';
    el.nativeElement.style.justifyContent = 'center';
    el.nativeElement.style.lineHeight = 1;
    el.nativeElement.style.position = 'relative';
    el.nativeElement.style.height = '32px';
    el.nativeElement.style.width = '32px';
    el.nativeElement.style.backgroundColor = 'rgb(7, 71, 166)';
    el.nativeElement.style.borderWidth = '0px';
    el.nativeElement.style.borderStyle = 'initial';
    el.nativeElement.style.borderColor = 'initial';
    el.nativeElement.style.borderImage = 'initial';
    el.nativeElement.style.borderRadius = '50%';
    el.nativeElement.style.outline = 'none';
    el.nativeElement.style.padding = '0px'; */

    // el.nativeElement.style.paddingTop = '8px';
}
showNavButton = false;
/* (mouseenter)="showNavButton = true"
    (mouseleave)="showNavButton = false" */

  @HostListener('mouseenter') onMouseEnter() {
    this.showNavButton = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.showNavButton = false;
  }

/*   @HostListener('mousedown') onMouseDown() {
    this.el.nativeElement.style.color = 'rgb(222, 235, 255)';
    this.el.nativeElement.style.background = '#1A5ABC';
  }

  @HostListener('mouseup') onMouseUp() {
    this.el.nativeElement.style.color = 'rgb(255, 255, 255)';
    this.el.nativeElement.style.background = '#1C63CE';
  } */
/*
.global-nav-container-top-icon:focus {
    box-shadow: rgb(76, 154, 255) 0px 0px 0px 2px;
}
.button:hover {
  background-color: #1C63CE;
  color: white;

 */
}
