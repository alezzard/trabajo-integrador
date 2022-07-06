import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = environment.apiUrl+'persona/'

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer/1');
  }

  public putPersona(id: number, pers: persona): Observable<persona>{
    return this.http.put<persona>(`${this.URL}editar/${id}`,pers);
  }

  /* public deletePersona(id: number): Observable<string>{
    return this.http.delete<string>(`${this.URL}borrar/${id}`);
  } */

}
