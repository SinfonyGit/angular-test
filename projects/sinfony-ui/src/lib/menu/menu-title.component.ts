import { Component } from '@angular/core';

@Component({
    selector: 'sbc-menu-title',
    template: `
    <div class="atlas-menu-label">
      <ng-content></ng-content>
    </div>
    `,
    styles: [`
    .atlas-menu-label {
      -webkit-box-align: center;
      align-items: center;
      color: rgb(107, 119, 140);
      display: flex;
      flex: 1 1 auto;
      padding: 8px 12px;
      font-size: 11px;
      line-height: 1;
      text-transform: uppercase;
      min-width: 0px;
      flex: 1 1 auto;
    }
    `]
  })
export class MenuTitleComponent {

}
