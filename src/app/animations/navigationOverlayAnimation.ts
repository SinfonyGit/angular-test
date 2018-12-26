import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

export const navigationOverlayAnimation = trigger('showOverlay', [
    // Preden je Drawer Navigacijski Odprt
    state('true' , style({ opacity: 1, display: 'block' })),
    // Ko se Modal Odpre
    // Prvotno stanje
    // state('false', style({ opacity: 0.3, display: 'none' })),
    state('false', style({ opacity: 0.2 })),
    transition('0 => 1', animate('.2s')),
    transition('1 => 0', animate('.4s'))

]);

