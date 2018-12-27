import { Component } from '@angular/core';

@Component({
    selector: 'sbc-nav-content',
    template: `
    <div class="nav-content">
      <ng-content></ng-content>
    </div>
    `,
    styles: [`
    .nav-content {
      flex: 1 1 0%;
      overflow: auto;
    }
    `]
  })
export class NavContentComponent {

}

