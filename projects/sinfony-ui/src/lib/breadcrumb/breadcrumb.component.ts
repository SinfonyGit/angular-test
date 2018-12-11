import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
    selector: 'sf-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
  })
export class BreadcrumbComponent implements OnInit {

  @Input() items = '';
  @Input() name = '';
  @Input() link = '';



  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu56', this.items);
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu56', this.link);
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu5', this.name);
  }

}
