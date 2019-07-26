import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RIEGOS_ROUTE } from './riegos.routes';
import { HomeRiegosComponent } from './home-riegos.component';
import { SharedModule } from '../shared/shared.module';
import { UnidadMedidaComponent } from './unidad-medida/unidad-medida.component';

@NgModule({
  
  declarations: [  
    HomeRiegosComponent,
    UnidadMedidaComponent
],
exports: [  
  HomeRiegosComponent,

],
  imports: [
    CommonModule,
    RIEGOS_ROUTE,
    SharedModule
  ]
})
export class RiegosModule { }
