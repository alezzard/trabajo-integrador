import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
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

  public deleteExperiencia(id: number): Observable<string>{
    console.log("deleteExperiencia   id:"+id)
    return this.http.delete<string>(`${this.URL}borrar/${id}`);//fallaba al no utilizar `${variable}string${variable}`
  }
  
  public putExperiencia(id:number, exp :experiencia): Observable<experiencia>{
    return this.http.put<experiencia>(`${this.URL}editar/${id}`, exp);
  }
}
