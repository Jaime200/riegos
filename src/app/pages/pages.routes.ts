import { RouterModule,Routes } from "@angular/router";
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HomeRiegosComponent } from '../riegos/home-riegos.component';
import { AuthGuard } from '../guards/auth.guard';
import { HomeComponent } from './home/home.component';

const pagesRoutes : Routes =[


{ path: '', 
    //component: HomeComponent, 
    children : [
        {path: 'dashboard',  component : HomeComponent, },        
        {path: '',  redirectTo : '/dashboard', pathMatch:'full'}
     ]
},
]

export const PAGES_ROUTE = RouterModule.forChild( pagesRoutes );