import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
    selector: 'sbc-global-nav-test',
    templateUrl: './global-nav.component.html',
    styleUrls: ['./global-nav.component.scss']
  })
export class GlobalNavigationComponent implements OnInit {

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
