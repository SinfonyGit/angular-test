import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'sbc-global-nav-footer-test',
    template: `
    <div class="global-nav-container-top">
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
      padding-top: 8px;
    }
    `]
  })
export class GlobalNavFooterComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
