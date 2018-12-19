import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'sbc-main-nav-footer',
    template: `
    <div class="global-nav-container-bot" >
        <ng-content></ng-content>
    </div>
    `,
    styles: [`
    .global-nav-container-bot {
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 100%;
      padding-top: 8px;
    }
    `]
  })
export class MainNavFooterComponent implements OnInit {



  constructor() { }
  ngOnInit() {
  }

}
