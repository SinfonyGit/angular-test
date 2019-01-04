import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

  // animacija se uporablja pri kliku na gumb odpri / zapri navigacijo
export const navigationDrawerAnimation = trigger('openCloseDrawerAnimation', [
  state('open', style({
    width: '241px'
  })),
  state('closed', style({
    width: '21px'
  })),
  transition('open => closed', [
    animate('0.7s ease-in-out')
  ]),
  transition('closed => open', [
    // animate('0.4s 0.2s')  Prva pove čas animacije, drugi parameter pove čas PREDEN se začne animacija oz Delay
    animate('0.7s ease-in-out')
  ]),
]);

