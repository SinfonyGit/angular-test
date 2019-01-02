import { Component} from '@angular/core';

@Component({
    selector: 'sbc-global-nav',
    template: `
      <div class="global-nav-container">
        <ng-content></ng-content>
      </div>
    `,
    styles: [`
    .global-nav-container {
      position: fixed;
      /* -webkit-box-align: center; */
      align-items: center;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      /* flex-shrink: 0; */
      height: 100vh;
      -webkit-box-pack: justify;
      justify-content: space-between;
      padding-bottom: 24px;
      padding-top: 24px;
      width: 64px;
      background-color: rgb(7, 71, 166);
      /* Barva ikonic */
      color: rgb(255, 255, 255);
      /* fill: rgb(7, 71, 166); */
      transition: background-color 0.3s cubic-bezier(0.2, 0, 0, 1) 0s, color 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
      /* Shadow box na desni strani */
      -webkit-box-shadow: inset -2px 0px 4px 0px rgba(0,0,0,0.19);
      -moz-box-shadow: inset -2px 0px 4px 0px rgba(0,0,0,0.19);
      box-shadow: inset -2px 0px 4px 0px rgba(0,0,0,0.19);
    }
    ::ng-deep .tooltip {
      background-color: black;
      color: blue;
      font-size: 14px;
    }
    `]
  })
export class GlobalNavigationComponent {


  constructor() { }


}
