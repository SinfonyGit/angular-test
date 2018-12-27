import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

function smallSideBar(fromState: string, toState: string) {
  toState = '21';
  return toState;
}

function expandedSideBar(widthSideBarExpanded: string) {
  widthSideBarExpanded = '241';
  return widthSideBarExpanded;
}

export const navigationDrawerButtonAnimation = trigger('openCloseDrawerButtonAnimation', [
  state('open', style({
    position: 'relative',
    right: '0px',
    width: '21px',
    // opacity: 1,
    // backgroundColor: 'yellow'
  })),
  state('closed', style({
    position: 'relative',
    right: '220px',
    width: '21px',
    // opacity: 0.5,
    // backgroundColor: 'green'
  })),
  transition( 'open => closed', [
    animate('1s')
  ]),
  transition('closed => open', [
    animate('1s')
  ])
]);
