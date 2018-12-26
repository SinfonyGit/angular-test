import {
    trigger,
    state,
    style,
    animate,
    transition,
  } from '@angular/animations';

export const navigationDrawerAnimation = trigger('openCloseDrawerAnimation', [
  state('true' , style({ left: '-20%'})),
  state('false', style({ left: '0%'})),
  transition('0 => 1', animate('.2s')),
  transition('1 => 0', animate('.2s'))
]);

