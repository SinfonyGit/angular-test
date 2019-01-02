import { Component, Input} from '@angular/core';

@Component({
    selector: 'sbc-drawer-navigation1',
    template: `
    <mat-drawer #drawer2 sbcDrawer>
    <div class="drawer-navigation">


      <button
      mat-icon-button
      (click)="drawer2.close()"
      >

      <fa-icon [icon]="['fas', 'arrow-left']" size="lg"></fa-icon>
    </button>


    </div>
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
export class DrawerNavigation1Component {
  @Input() name = '';

}
