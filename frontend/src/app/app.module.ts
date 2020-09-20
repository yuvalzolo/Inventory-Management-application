import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';

import { HttpClientModule} from '@angular/common/http';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { GetItemComponent } from './pages/get-item/get-item.component';
import { RemoveItemComponent } from './pages/remove-item/remove-item.component';
import { UpdateItemComponent } from './pages/update-item/update-item.component';
import {CommonModule} from '@angular/common';
import { WithdrawItemComponent } from './pages/withdraw-item/withdraw-item.component';
import { DepositItemComponent } from './pages/deposit-item/deposit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    AddItemComponent,
    GetItemComponent,
    RemoveItemComponent,
    UpdateItemComponent,
    WithdrawItemComponent,
    DepositItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
