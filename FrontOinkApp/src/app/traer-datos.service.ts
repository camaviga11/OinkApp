import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from './modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class TraerDatosService {
  personas:Persona[];
  id=1;
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/personas'
  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }

}
