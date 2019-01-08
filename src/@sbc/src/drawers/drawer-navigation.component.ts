import { ShowOverlayService } from './show-overlay.service';

import { Component, Output } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'sbc-drawer-navigation',
    template: `
    <div class="drawer-navigation">
    <button mat-icon-button select="[action]"


    (click)="closeOverlay()"
    (keydown.esc)="closeOverlay()"
    >

        <fa-icon [icon]="faArrowLeft" size="lg"></fa-icon>
      </button>

    </div>
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
export class DrawerNavigationComponent {

  constructor(private overlay: ShowOverlayService) {}

  faArrowLeft = faArrowLeft;

  overlayHistory: boolean;

  closeOverlay() {
    this.overlay.changeOverlay(false);
  }


}
