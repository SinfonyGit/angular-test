import { NgModule } from '@angular/core';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faCoffee, faStar, faSquare, faEnvelope, faSync } from '@fortawesome/free-solid-svg-icons';

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

// Importa celotno knjižnico REGULAR knjižnico
// import { far } from '@fortawesome/free-regular-svg-icons';

// Add an icon to the library for convenient access in other components
library.add(faCoffee, faStar, farStar, faSquare, faEnvelope, faSync);

@NgModule({
  imports: [
    FontAwesomeModule,

  ],

  exports: [
    FontAwesomeModule,
  ]
})
export class FontAwesomeIconsModule {}
