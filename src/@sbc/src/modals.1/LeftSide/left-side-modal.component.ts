import { Component} from '@angular/core';


@Component({
    selector: 'sbc-modal-left',
    template: `
      <div class="global-nav-container-element">
        <ng-content></ng-content>
      </div>
    `,
    styles: [`
    .global-nav-container-element {
      background-color: white;
      /* display: flex; */
      height: 100vh;
      left: 0px;
      position: fixed;
      top: 0px;
      width: 600px;
      z-index: 501;
      overflow: auto;

    }
    `]
  })
export class LeftSideModalComponent {



  constructor() { }


}
