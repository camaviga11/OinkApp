import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../modelo/Persona';
import { TraerDatosService } from '../traer-datos.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  personas:Persona[];

  constructor(private router:Router,private service:TraerDatosService) { }

  ngOnInit(): void {
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
      console.log(data);
    })
  }

}
