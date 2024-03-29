import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';
import { AddReactiveComponent } from './add-reactive/add-reactive.component';


const routes: Routes = [
  {path: '' , redirectTo: 'list' , pathMatch: 'full'},
  {path: 'list' , component: CustomerlistComponent},
  {path: 'add' , component: AddcustomerComponent},
  {path: 'search' , component: SearchcustomerComponent},
  {path: 'addreactive' , component: AddReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
