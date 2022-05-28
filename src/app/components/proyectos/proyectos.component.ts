import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos : proyecto[] = [];

  constructor(private proyectoService : ProyectoService) { }
  
  ngOnInit(): void {
  this.proyectoService.getProyecto().subscribe(data =>{this.proyectos = data})
  }

}
