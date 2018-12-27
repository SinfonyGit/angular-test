import { Component} from '@angular/core';

@Component({
    selector: 'sbc-drawer-navigation',
    template: `
    <div class="drawer-navigation">
      <ng-content></ng-content>
    </div>
    `,
    styles: [`
    .drawer-navigation {
      -webkit-box-align: center;
      align-items: center;
      box-sizing: border-box;
      color: rgb(66, 82, 110);
      display: flex;
      flex-shrink: 0;
      flex-direction: column;
      height: 100vh;
      padding-bottom: 16px;
      padding-top: 24px;
      width: 64px;
    }
    `]
  })
export class DrawerNavigationComponent {

}
