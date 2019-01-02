import { Component } from '@angular/core';

@Component({
    selector: 'sbc-drawer-content1',
    template: `
    <div class="drawer-content">
      <ng-content></ng-content>
    </div>
    `,
    styles: [`
    .drawer-content {
      margin-top: 24px;
      flex: 1 1 0%;
      overflow: auto;
      padding-right: 24px;
    }

    `]
  })
export class DrawerContent1Component {

}
