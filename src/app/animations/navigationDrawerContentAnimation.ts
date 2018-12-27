import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

export const navigationDrawerContentAnimation = trigger('openCloseDrawerContentAnimation', [
  state('open', style({
    position: 'absolute',
    left: 0,
    // width: '21px',
    // transform: 'translateX(0%)'
    // opacity: 1,
    // backgroundColor: 'yellow'
  })),
  state('closed', style({
    position: 'absolute',
    left: 0,
    width: '200px',
    // width: '21px',
    // transform: 'translateX(-100%)'
    // opacity: 0.5,
    // backgroundColor: 'green'
  })),
  transition('open => closed', [
    animate('1s')
  ]),
  transition('closed => open', [
    animate('1s')
  ])
]);
