import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
    selector: 'sbc-global-nav-content',
    templateUrl: './global-nav-content.component.html',
    styleUrls: ['./global-nav-content.component.scss']
  })
export class GlobalNavigationContentComponent implements OnInit {

  /* @Input() items = '';
  @Input() name = '';
  @Input() link = ''; */



  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit() {
    /* this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu56', this.items);
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu56', this.link);
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu5', this.name); */
  }

}
