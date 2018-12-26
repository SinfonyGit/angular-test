import {
    trigger,
    state,
    style,
    animate,
    transition,
    group,
    query,
    animateChild
  } from '@angular/animations';

export const navigationSlideAnimation = trigger('openCloseAnimation', [
  /* state('openAnimation', style({
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
        width: 100
      })),
      animate('0.3s 0.2s ease', style({
        opacity: 0
      }))
    ])
  ]), */

  // DOGODEK ON KLIKU NAZAJ NA MENI IZ PODMENIJA
  transition('openAnimation => closeAnimation', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%'}))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
    // DOGODEK ON KLIKU DOKUMENTACIJA V PODMENI
  transition('closeAnimation => openAnimation', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ right: '-100%'})
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
          // STARI KONTENT KI GRE VSTRAN
        animate('300ms ease-out', style({ right: '100%'}))
      ]),
      query(':enter', [
          // NOVI KONTENT KI GRE NOTRO OZ KAJ ŽELIMO POKAZAT  %--> nam pove kje počaka besedilo
        animate('300ms ease-out', style({ right: '-15%'}))
      ])
    ]),
    query(':enter', animateChild()),
  ]),
]);

