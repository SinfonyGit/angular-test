import { OnInit, Renderer2, ElementRef } from '@angular/core';
export declare class BreadcrumbComponent implements OnInit {
    private renderer;
    private el;
    items: string;
    name: string;
    link: string;
    constructor(renderer: Renderer2, el: ElementRef);
    ngOnInit(): void;
}
