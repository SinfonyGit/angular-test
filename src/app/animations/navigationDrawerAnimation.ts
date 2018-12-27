import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';

export const navigationDrawerAnimation = trigger('openCloseDrawerAnimation', [
  state('open', style({
    width: '241px'
  })),
  state('closed', style({
    width: '21px'
  })),
  transition('open => closed', [
    animate('0.2s')
  ]),
  transition('closed => open', [
    // animate('0.3s')
  ]),
]);

