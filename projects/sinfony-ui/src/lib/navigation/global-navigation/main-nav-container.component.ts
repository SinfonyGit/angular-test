import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
    selector: 'sf-main-nav-container',
    template: `
      <div class="global-nav-container">
        <ng-content></ng-content>
      </div>
    `,
    styles: [`
      .global-nav-container {
        -webkit-box-align: center;
        align-items: center;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        height: 100vh;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding-bottom: 24px;
        padding-top: 24px;
        width: 64px;
        background-color: rgb(7, 71, 166);
        color: rgb(255, 255, 255);
        fill: rgb(7, 71, 166);
        transition: background-color 0.3s cubic-bezier(0.2, 0, 0, 1) 0s, color 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
      }
    `]
  })
export class MainNavContainerComponent implements OnInit {


  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit() {
  }

}
