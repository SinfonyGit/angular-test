import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    isExpanded = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  widthSideBar = '241';
  widthSideBarExpanded = '241';
  widthSideBarCollapsed = '21';

  hide() {
    if (this.widthSideBarCollapsed === '20') {
      console.log('skrito je');
    }
  }


  toggleSideBar(status: string) {
    // console.log('toggle called');
    // this.sb.toggle();
    if (this.widthSideBar === this.widthSideBarExpanded) {
      this.widthSideBar = this.widthSideBarCollapsed;
      return status = '1';
    } else {
      this.widthSideBar = this.widthSideBarExpanded;
      return status = '0';
    }
    // snav.toggle();
  }


}
