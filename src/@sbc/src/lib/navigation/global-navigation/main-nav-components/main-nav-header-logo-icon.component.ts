import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'sbc-main-nav-header-logo-icon',
    template: `
    <div class="css-1">
      <div class="css-2">
        <div class="css-3">
          <div class="css-4 button">
          <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
    `,
    styles: [`
    .css-1 {
      padding-bottom: 8px;
    }
    .css-2 {
      width: 100%;
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;
    }
    .css-3 {
      display: inline-block;
    }
    .css-4 {
      -webkit-box-align: center;
      align-items: center;
      color: rgb(222, 235, 255);
      cursor: pointer;
      display: flex;
      font-size: inherit;
      -webkit-box-pack: center;
      justify-content: center;
      line-height: 1;
      position: relative;
      height: 45px;
      width: 45px;
      background-color: rgb(7, 71, 166);
      border-width: 0px;
      border-style: initial;
      border-color: initial;
      border-image: initial;
      border-radius: 50%;
      outline: none;
      padding: 0px;
    }
    .css-4:focus {
      box-shadow: rgb(76, 154, 255) 0px 0px 0px 2px;
    }
    .button:focus {
      background-color: #05367F;
    }
    .button:hover {
      background-color: #1C63CE; /* Green */
      color: white;
    }
    .button:active {
      background-color: #1A5ABC;
  }
    `]
  })
export class MainNavHeaderLogoIconComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
