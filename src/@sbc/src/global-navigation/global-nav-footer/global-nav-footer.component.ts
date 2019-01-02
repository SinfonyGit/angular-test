import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
    selector: 'sbc-global-nav-footer',
    template: `
      <div class="global-nav-footer">
        <ng-content></ng-content>
      </div>
    `,
    styles: [`
    .global-nav-footer {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    `]
  })
export class GlobalNavFooterComponent {

  constructor() { }


}
