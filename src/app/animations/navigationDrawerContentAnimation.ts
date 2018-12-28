import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

export const navigationDrawerContentAnimation = trigger('openCloseDrawerContentAnimation', [
  state('open', style({
    // position: 'absolute',
    marginRight: '0px',
    // left: 0,
    // transform: 'translateX(0%)'
    // width: '*',
    // transform: 'translateX(0%)'
    // opacity: 1,
     backgroundColor: 'yellow'
  })),
  state('closed', style({
    marginRight: '220px',
    // position: 'absolute',
    // left: 0,
    // width: '200px',
    // transform: 'translateX(-10%)'
    // width: '21px',
    // transform: 'translateX(-100%)'
    // opacity: 0.5,
     backgroundColor: 'green'
  })),
  transition('open => closed', [
    animate('2s')
  ]),
  transition('closed => open', [
    animate('2s')
  ])
]);

