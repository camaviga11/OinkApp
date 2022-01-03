import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { RegistroComponent } from './registro/registro.component';
import { FooterComponent } from './footer/footer.component';
import { DatosComponent } from './datos/datos.component';
import { FormsModule } from '@angular/forms';
import { TraerDatosService } from './traer-datos.service';
import { HttpClientModule } from '@angular/common/http';

const routesApp:Routes=[];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MiCuentaComponent,
    NavBarComponent,
    RegistroComponent,
    FooterComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routesApp)
  ],
  providers: [TraerDatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
