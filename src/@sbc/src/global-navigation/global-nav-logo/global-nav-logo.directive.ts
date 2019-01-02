import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sbcGlobalNavLogo]'
})
export class GlobalNavLogoDirective {
  constructor(private el: ElementRef) {
    // CSS 1 Ta CSS je uporabljen kot div spacer :D
    // el.nativeElement.style.paddingBottom = '8px';

    // CSS 2
    el.nativeElement.style.width = '100%';
    el.nativeElement.style.webkitBoxAlign = 'center';
    el.nativeElement.style.alignItems = 'center';
    el.nativeElement.style.display = 'flex';
    el.nativeElement.style.flexDirection = 'column';
    el.nativeElement.style.webkitBoxPack = 'justify';
    el.nativeElement.style.justifyContent = 'space-between';


    // CSS 3
    el.nativeElement.style.display = 'inline-block';

    // CSS 4
    el.nativeElement.style.webkitBoxAlign = 'center';
    el.nativeElement.style.alignItems = 'center';
    el.nativeElement.style.color = 'rgb(255, 255, 255)';
    // Ta barva je barva na Atlassian Jira strani (Whitesmoke)
    // el.nativeElement.style.color = 'rgb(222, 235, 255)';
    el.nativeElement.style.display = 'flex';

    el.nativeElement.style.fontSize = 'inherit';
    el.nativeElement.style.webkitBoxPack = 'center';
    el.nativeElement.style.display = 'flex';
    el.nativeElement.style.justifyContent = 'center';
    el.nativeElement.style.lineHeight = 1;
    el.nativeElement.style.position = 'relative';
    el.nativeElement.style.height = '45px';
    el.nativeElement.style.width = '45px';
    el.nativeElement.style.backgroundColor = 'rgb(7, 71, 166)';
    el.nativeElement.style.borderWidth = '0px';
    el.nativeElement.style.borderStyle = 'initial';
    el.nativeElement.style.borderColor = 'initial';
    el.nativeElement.style.borderImage = 'initial';
    el.nativeElement.style.borderRadius = '50%';
    el.nativeElement.style.outline = 'none';
    el.nativeElement.style.padding = '0px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.background = '#1C63CE';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'rgb(255, 255, 255)';
    this.el.nativeElement.style.background = null;
  }

  @HostListener('mousedown') onMouseDown() {
    this.el.nativeElement.style.color = 'rgb(222, 235, 255)';
    this.el.nativeElement.style.background = '#1A5ABC';
  }

  @HostListener('mouseup') onMouseUp() {
    this.el.nativeElement.style.color = 'rgb(255, 255, 255)';
    this.el.nativeElement.style.background = '#1C63CE';
  }

}
