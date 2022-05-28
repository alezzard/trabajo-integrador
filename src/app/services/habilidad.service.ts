import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidad } from '../model/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  URL = 'http://localhost:8080/habilidad/'

  constructor(private http: HttpClient) { }

  public getHabilidades(): Observable<habilidad[]>{
    return this.http.get<habilidad[]>(this.URL+ 'traer');
  }
}
