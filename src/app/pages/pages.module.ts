import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTE } from './pages.routes';

import { HomeComponent } from './home/home.component';
import { RiegosModule } from '../riegos/riegos.module';

@NgModule({
  
  declarations: [
    DashboardComponent,
    HomeComponent
],
exports: [
    DashboardComponent,
    HomeComponent
],
  imports: [
    CommonModule,
    SharedModule,
    RiegosModule,
    PAGES_ROUTE
  ],
  
})
export class PagesModule { }
