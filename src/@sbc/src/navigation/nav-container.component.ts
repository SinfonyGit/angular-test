import { Component } from '@angular/core';

@Component({
    selector: 'sbc-nav-container',
    template: `
    <div class="drawer-container">
    <sbc-nav-container-button>
    </sbc-nav-container-button>
      <ng-content></ng-content>
    </div>
    `,
    styles: [`
    .drawer-container{
      display: flex;
  }
    `]
  })
export class NavContainerComponent {

}
