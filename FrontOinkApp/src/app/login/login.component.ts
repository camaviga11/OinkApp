import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  //Lleva a registro
  Go2(){
    this.router.navigate(["registro"]);
  }
  //leva al inicio
  Go1(){
    this.router.navigate(['']);
  }
  
}
