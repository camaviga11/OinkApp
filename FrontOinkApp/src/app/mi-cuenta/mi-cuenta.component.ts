import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {

  constructor(private router:Router) { }
  //para agregar un nuevo usuario.
  Nuevo(){
    this.router.navigate(["nuevo"])
  }

  ngOnInit(): void {
  }

}
