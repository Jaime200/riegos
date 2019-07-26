import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './pages/registro/registro.component';
// import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    // HomeComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    HttpClientModule,    
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
