import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'sf-main-nav-header',
    template: `
    <div class="global-nav-container-top" >
        <ng-content></ng-content>
    </div>
    `,
    styles: [`
    .global-nav-container-top {
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 16px;
    }

    .global-nav-container-top:focus {
        outline: -webkit-focus-ring-color auto 5px;
    }
    `]
  })
export class MainNavHeaderComponent implements OnInit {



  constructor() { }
  ngOnInit() {
  }

}
