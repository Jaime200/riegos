import { RouterModule } from '@angular/router';
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class SharedModule { }
