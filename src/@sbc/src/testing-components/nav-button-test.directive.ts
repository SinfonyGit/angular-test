import { Directive, HostListener, HostBinding, EventEmitter, Output, Input } from '@angular/core';

@Directive({
  selector: '[sbcNavButtonTest]'
})
export class NavButtonTestDirective {

  @Input() drawerAnimation = true;

  @HostListener('click') toggleDrawerAnimation() {
    this.drawerAnimation = !this.drawerAnimation;
  }


/*      (click)="toggleSideBar()"
     (click)="toggleHideNavContent()"
     (click)="toggleDrawerAnimation()"
     (click)="toggleWidthSideBarAnimation()" */

}
