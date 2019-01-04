import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[sbcEllipsis]'
})
export class TextEllipsisDirective {
// Odstrani vse besedila ki bi se drugače raztezala v drugo vrstico Z PIKICAMI
    constructor(private el: ElementRef) {
      el.nativeElement.style.overflow = 'hidden';
      el.nativeElement.style.whiteSpace = 'nowrap';
      el.nativeElement.style.textOverflow = 'ellipsis';
     }

}
