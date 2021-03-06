import {
    trigger,
    style,
    animate,
    transition,
    group,
    query,
    animateChild
  } from '@angular/animations';

  // Ta animacija se uporablja v meniju in prvonivojskega prehoda v druginivojski način
export const navigationSlideAnimation = trigger('openCloseAnimation', [
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

