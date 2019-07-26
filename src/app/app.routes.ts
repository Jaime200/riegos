import { RouterModule,Routes } from "@angular/router";

import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
    { path: 'registro', component: RegistroComponent },
    { path: 'login'   , component: LoginComponent },
    //{ path: '**', redirectTo: '/dashboard' }
    
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash:true })