import { Component, Input} from '@angular/core';

@Component({
    selector: 'sbc-mat-drawer-test1',
    template: `
    <mat-drawer #drawer2 sbcDrawer>


     <ng-content></ng-content>

    </mat-drawer>
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
export class MatDrawerTest1Component {
  @Input() name = '';

}
