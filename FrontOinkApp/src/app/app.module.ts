import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';

const routesApp:Routes=[
  {path:'', component:InicioComponent},
  {path:'micuenta',component:MiCuentaComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MiCuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routesApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
