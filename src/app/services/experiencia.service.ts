import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'http://localhost:8080/experiencia/'

  constructor(private http:HttpClient) { }

  public getExperienciasLaborales(): Observable<experiencia[]>{
    return this.http.get<experiencia[]>(this.URL+ 'traer/laboral');
  }

  public getExperienciasAcademicas(): Observable<experiencia[]>{
    return this.http.get<experiencia[]>(this.URL+ 'traer/academica');
  }

 /*  public putExperiencia(id:number, exp :experiencia): Observable<experiencia>{
    return this.http.put<experiencia>(this.URL + "editar/"+ id, );
  } */
}
