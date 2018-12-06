import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'forms', component: AddressFormComponent },
  { path: 'datatable', component: DatatableComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'mainNav', component: MainNavigationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }