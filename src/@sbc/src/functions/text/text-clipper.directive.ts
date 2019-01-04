import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[sbcClipper]'
})
export class TextClipperDirective {
// Odstrani vse besedila ki bi se drugače raztezala v drugo vrstico BREZ PIKIC
    constructor(private el: ElementRef) {
        el.nativeElement.style.overflow = 'hidden';
        el.nativeElement.style.whiteSpace = 'nowrap';
        el.nativeElement.style.textOverflow = 'clip';
     }

}
