import { Persona } from './../modelo/Persona';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraerDatosService } from '../traer-datos.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  persona:Persona=new Persona();
  constructor(private router:Router, private userService:TraerDatosService) { }

  ngOnInit(): void {
  }
  //Boton que captura los datos de registro.
  Registrarse(){
    this.userService.createPersona(this.persona)
    .subscribe(data=>{
      alert("Se agrego con exito..");
      this.router.navigate(["micuenta"]);
      console.log(data);
    })
    alert("xxxx");
  }
  //leva al inicio
  Go12(){
    this.router.navigate(["login"]);
  }

}
