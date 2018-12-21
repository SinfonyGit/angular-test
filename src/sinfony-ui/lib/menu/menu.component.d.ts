import { OnInit, Renderer2, ElementRef } from '@angular/core';
export declare class MenuComponent implements OnInit {
    private renderer;
    private el;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
}
