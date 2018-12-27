import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

export const navigationDrawerContentAnimation = trigger('openCloseDrawerContentAnimation', [
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
  transition('open => closed', [
    animate('0.5s')
  ]),
  transition('closed => open', [
    animate('0.5s')
  ])
]);

