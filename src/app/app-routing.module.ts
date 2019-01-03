import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from './tree/tree.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { TestingUiComponent } from './testing-ui/testing-ui.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, data: {animation: 'HomePage'}},
  { path: 'items', component: ItemsComponent },
  { path: 'forms', component: AddressFormComponent },
  { path: 'datatable', component: DatatableComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'mainNav', component: MainNavigationComponent },
  { path: 'documentation', component: DocumentationComponent, data: {animation: 'AboutPage'} },
  { path: 'testing-ui', component: TestingUiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
