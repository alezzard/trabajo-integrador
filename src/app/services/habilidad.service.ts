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
    return this.http.get<habilidad[]>(`${this.URL}traer`);
  }

  public deleteHabilidad(id: number): Observable<string>{
    return this.http.delete<string>(`${this.URL}borrar/${id}`);
  }

  public putHabilidad(id: number, hab:habilidad): Observable<habilidad>{
    return this.http.put<habilidad>(`${this.URL}editad/${id}`, hab);
  }
}
