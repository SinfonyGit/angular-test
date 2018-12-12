import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'sf-main-nav-header-logo-icon',
    template: `
    <div class="global-nav-container-top-icon button">
      <ng-content></ng-content>
    </div>
    `,
    styles: [`
    .global-nav-container-top-icon{
      -webkit-box-align: center;
      align-items: center;
      color: rgb(255, 255, 255);
      cursor: pointer;
      display: flex;
      font-size: inherit;
      -webkit-box-pack: center;
      justify-content: center;
      line-height: 1;
      position: relative;
      height: 40px;
      width: 40px;
      background-color: rgb(7, 71, 166);
      border-width: 0px;
      border-style: initial;
      border-color: initial;
      border-image: initial;
      border-radius: 50%;
      outline: none;
      padding: 0px;
  }

  .global-nav-container-top-icon:focus {
      box-shadow: rgb(76, 154, 255) 0px 0px 0px 2px;
  }
  .button:hover {
    background-color: #1C63CE; /* Green */
    color: white;
  }
    `]
  })
export class MainNavHeaderLogoIconComponent implements OnInit {



  constructor() { }
  ngOnInit() {
  }

}
