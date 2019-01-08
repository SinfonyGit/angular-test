import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

/*   private showOverlay = new BehaviorSubject<boolean>(false);
  currentShowOverlay = this.showOverlay.asObservable();

  changeOverlay(overlay: boolean) {
    this.showOverlay.next(overlay);
  } */

  private navigationFunctions = new BehaviorSubject<boolean>(true);
  currentNavigationFunctions = this.navigationFunctions.asObservable();

  private showHideNavButton = new BehaviorSubject<boolean>(false);
  currentShowHideNavButton = this.showHideNavButton.asObservable();

  private hideNavContent = new BehaviorSubject<boolean>(false);
  currentHideNavContent = this.hideNavContent.asObservable();

  private drawerAnimation = new BehaviorSubject<boolean>(true);
  currentDrawerAnimation = this.drawerAnimation.asObservable();

  private widthSideBarAnimation = new BehaviorSubject<boolean>(false);
  currentwidthSideBarAnimation = this.widthSideBarAnimation.asObservable();

  private widthSideBar = new BehaviorSubject<string>('241');
  currentwidthSideBar = this.widthSideBar.asObservable();


  changeNavigationFunctions(navigation: boolean) {
    this.navigationFunctions.next(navigation);
  }

  changeShowHideNavButton(showHideButton: boolean) {
    this.showHideNavButton.next(showHideButton);
  }

  changeHideNavContent(hideNavContent: boolean) {
    this.hideNavContent.next(hideNavContent);
  }

  changeDrawerAnimation(drawerAnimation: boolean) {
    this.drawerAnimation.next(drawerAnimation);
  }

  changeWidthSideBarAnimation(widthSideBarAnimation: boolean) {
    this.widthSideBarAnimation.next(widthSideBarAnimation);
  }

  changeWidthSideBar(widthSideBar: string) {
    this.widthSideBar.next(widthSideBar);
  }

constructor() { }

}
