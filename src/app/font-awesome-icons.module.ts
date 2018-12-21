import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faCoffee,
    faStar,
    faSquare,
    faEnvelope,
    faSync,
    faHome,
    faSearch,
    faPlus,
    faBell,
    faTh,
    faQuestionCircle,
    faUserCircle,
    faCog,
    faTable,
    faStream,
    faArrowCircleRight,
    faFileAlt
} from '@fortawesome/free-solid-svg-icons';

import {
    faStar as farStar,
    faUserCircle as farUserCircle,
    faFolder as farFolder
} from '@fortawesome/free-regular-svg-icons';

import {
    faWpforms
} from '@fortawesome/free-brands-svg-icons';

// Importa celotno knjižnico REGULAR knjižnico
// import { far } from '@fortawesome/free-regular-svg-icons';

// Add an icon to the library for convenient access in other components
library.add(
    faCoffee,
    faStar,
    farStar,
    faSquare,
    faEnvelope,
    faSync,
    faHome,
    faSearch,
    faPlus,
    faBell,
    faTh,
    faQuestionCircle,
    faUserCircle,
    farUserCircle,
    faCog,
    farFolder,
    faWpforms,
    faTable,
    faStream,
    faArrowCircleRight,
    faFileAlt
);

@NgModule({
  imports: [
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class FontAwesomeIconsModule {}
