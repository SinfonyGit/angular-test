import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
    selector: 'sbc-global-nav-header-test',
    templateUrl: './global-nav-header-test.component.html',
    styleUrls: ['./global-nav-header-test.component.scss']
  })
export class GlobalNavHeaderTestComponent implements OnInit {


  @Input() iconName = 'coffee';
  @Input() IconType = '';
  @Input() tooltipName: string;
  @Input() drawerName: string;


  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit() {
    /* this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu56', this.items);
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu56', this.link);
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu5', this.name); */
    // this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'coffee', this.iconName);
  }

}
