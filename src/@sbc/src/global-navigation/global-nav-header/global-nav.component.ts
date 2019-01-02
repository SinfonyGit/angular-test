import { Component } from '@angular/core';

@Component({
    selector: 'sbc-global-nav-header',
    template: `
      <div class="global-nav-header">
        <ng-content></ng-content>
      </div>
    `,
    styles: [`
    .global-nav-header {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    `]
  })
export class GlobalNavigationHeaderComponent {

  constructor() { }

}
