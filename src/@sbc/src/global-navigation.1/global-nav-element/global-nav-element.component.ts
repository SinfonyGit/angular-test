import { Component} from '@angular/core';


@Component({
    selector: 'sbc-global-nav-element',
    template: `
      <div class="global-nav-container-element">
        <ng-content></ng-content>
      </div>
    `,
    styles: [`
    .global-nav-container-element {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      height: 100%;
      -webkit-box-pack: justify;
      justify-content: space-between;
      padding-bottom: 24px;
      padding-top: 24px;
      width: 64px;
      background-color: rgb(7, 71, 166);
      /* Ta color se uporabi za barvo ikonice, Deluje za ikonice */
      color: rgb(255, 255, 255);
      /* Ne opazim sprememv za color in fill */
      /* fill: rgb(7, 71, 166); */
      /* Pri menjavi background-colora, se barva spremeni lepo počasi */
      transition: background-color 0.3s cubic-bezier(0.2, 0, 0, 1) 0s, color 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
      /* na desni strani so shadow črte */
      -webkit-box-shadow: inset -2px 0px 4px 0px rgba(0,0,0,0.19);
      -moz-box-shadow: inset -2px 0px 4px 0px rgba(0,0,0,0.19);
      box-shadow: inset -2px 0px 4px 0px rgba(0,0,0,0.19);
    }
    `]
  })
export class GlobalNavigationElementComponent {



  constructor() { }


}
