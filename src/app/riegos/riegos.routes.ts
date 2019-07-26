import { RouterModule,Routes } from "@angular/router";

import { AuthGuard } from '../guards/auth.guard';
import { HomeRiegosComponent } from './home-riegos.component';
import { UnidadMedidaComponent } from './unidad-medida/unidad-medida.component';

const riegosRoutes : Routes =[


{ path: 'riegos', 
    component: HomeRiegosComponent, 
    canActivate : [AuthGuard],
    children : [
        {path: 'unidad-medida',  component : UnidadMedidaComponent},
        {path: '',  redirectTo : '/riegos', pathMatch:'full'}
     ]
},
]

export const RIEGOS_ROUTE = RouterModule.forChild( riegosRoutes );