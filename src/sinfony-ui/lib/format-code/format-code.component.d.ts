import { OnInit, Renderer2, ElementRef } from '@angular/core';
export declare class FormatCodeComponent implements OnInit {
    private renderer;
    private el;
    color: string;
    bgColor: string;
    font: string;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
}
