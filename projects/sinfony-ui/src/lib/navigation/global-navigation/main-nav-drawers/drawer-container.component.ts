import { Component } from '@angular/core';

@Component({
    selector: 'sbc-drawer-container',
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
export class DrawerContainerComponent {

}
