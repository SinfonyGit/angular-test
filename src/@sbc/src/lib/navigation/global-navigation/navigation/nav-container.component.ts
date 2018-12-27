import { Component } from '@angular/core';

@Component({
    selector: 'sbc-nav-container',
    template: `
    <div class="drawer-container">
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
