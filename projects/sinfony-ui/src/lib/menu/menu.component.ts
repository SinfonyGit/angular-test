import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
    selector: 'sbc-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
  })
export class MenuComponent implements OnInit {


  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit() {
  }

}
