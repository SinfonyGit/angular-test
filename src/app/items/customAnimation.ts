import {
    trigger,
    state,
    style,
    animate,
    transition,
    group
  } from '@angular/animations';

export const navigationAnimation = trigger('openCloseAnimation', [
  state('openAnimation', style({
    width: 120,
    transform: 'translateX(0)', opacity: 1
  })),
  state('closeAnimation', style({
    width: 120,
    transform: 'translateX(0)', opacity: 1
  })),
  transition('openAnimation => closeAnimation', [
    style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
    group([
      animate('0.3s 0.1s ease', style({
        transform: 'translateX(0)',
        width: 120
      })),
      animate('0.3s ease', style({
        opacity: 1
      }))
    ])
  ]),
  transition('closeAnimation => openAnimation', [
    group([
      animate('0.3s ease', style({
        transform: 'translateX(50px)',
        width: 10
      })),
      animate('0.3s 0.2s ease', style({
        opacity: 0
      }))
    ])
  ])
]);

export const navigationAnimationBackup = trigger('openCloseAnimationBackup', [
  state('openAnimation', style({
    width: 120,
    transform: 'translateX(0)', opacity: 1
  })),
  state('closeAnimation', style({
    width: 120,
    transform: 'translateX(0)', opacity: 1
  })),
  transition('openAnimation => closeAnimation', [
    style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
    group([
      animate('0.3s 0.1s ease', style({
        transform: 'translateX(0)',
        width: 120
      })),
      animate('0.3s ease', style({
        opacity: 1
      }))
    ])
  ]),
  transition('closeAnimation => openAnimation', [
    group([
      animate('0.3s ease', style({
        transform: 'translateX(50px)',
        width: 10
      })),
      animate('0.3s 0.2s ease', style({
        opacity: 0
      }))
    ])
  ])
]);

