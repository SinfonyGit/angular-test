import { Component } from '@angular/core';

@Component({
    selector: 'sbc-nav-item-title',
    template: `
    <div class="podmeniText">
      <ng-content></ng-content>
    </div>
    `,
    styles: [`
    .podmeniText {
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 600;
      line-height: 1.45455;
      text-transform: uppercase;
      color: rgb(178, 200, 233);
      margin: 32px 0px 8px;
      padding: 0px 12px;
    }
    `]
  })
export class NavItemTitleComponent {

}
