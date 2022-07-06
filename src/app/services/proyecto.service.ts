import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = environment.apiUrl+'proyecto/'

  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<proyecto[]>{
    return this.http.get<proyecto[]>(`${this.URL}traer`);
  }

  public deleteProyecto(id: number): Observable<string>{
    return this.http.delete<string>(`${this.URL}borrar/${id}`);
  }

  public putProyecto(id: number, proy: proyecto): Observable<proyecto>{
    return this.http.put<proyecto>(`${this.URL}editar/${id}`,proy);
  }
}
