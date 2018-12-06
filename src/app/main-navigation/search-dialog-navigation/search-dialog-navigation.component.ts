import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-search-dialog-navigation',
  templateUrl: './search-dialog-navigation.component.html',
  styleUrls: ['./search-dialog-navigation.component.scss']
})
export class SearchDialogNavigationComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    isExpanded = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
  }

}
