import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'sbc-global-nav-container',
    templateUrl: './global-nav-container.component.html',
    styleUrls: ['./global-nav-container.component.scss']
  })
export class GlobalNavigationContainerComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );




  constructor(private breakpointObserver: BreakpointObserver, private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit() {
    /* this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu56', this.items);
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu56', this.link);
    this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu5', this.name); */
  }

}
