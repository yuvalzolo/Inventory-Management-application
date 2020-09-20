import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskViewComponent} from './pages/task-view/task-view.component';
import {AddItemComponent} from './pages/add-item/add-item.component';
import {GetItemComponent} from './pages/get-item/get-item.component';
import {RemoveItemComponent} from './pages/remove-item/remove-item.component';
import {UpdateItemComponent} from './pages/update-item/update-item.component';
import {WithdrawItemComponent} from './pages/withdraw-item/withdraw-item.component';
import {DepositItemComponent} from './pages/deposit-item/deposit-item.component';

const routes: Routes = [
  { path : '', redirectTo: '/items', pathMatch: 'full'},
  { path: 'items', component: TaskViewComponent},
  { path : 'add-item', component: AddItemComponent},
  { path: 'get-item', component: GetItemComponent},
  { path: 'remove-item', component: RemoveItemComponent},
  { path: 'update-item', component: UpdateItemComponent},
  { path: 'withdraw-item', component: WithdrawItemComponent},
  { path: 'deposit-item', component: DepositItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
