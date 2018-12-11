import { NgModule } from '@angular/core';

import { MainNavHeaderComponent } from './main-nav-header.component';


import { MainNavContainerComponent } from './main-nav-container.component';

@NgModule({
    declarations: [
    MainNavContainerComponent,
    MainNavHeaderComponent
  ],
  imports: [
  ],
  exports: [
  ]
})
export class GlobalNavigationModule { }
