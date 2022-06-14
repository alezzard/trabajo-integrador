import { Component, Input, OnInit } from '@angular/core';
import { proyecto } from 'src/app/model/proyecto.model';
import { LoginService } from 'src/app/services/login.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos : proyecto[] = [];

 editable: boolean;

  constructor(private proyectoService : ProyectoService, private loginService: LoginService) {
    this.editable = loginService.loggedIn();
   }
  
  ngOnInit(): void {
  this.proyectoService.getProyecto().subscribe(data =>{this.proyectos = data})
  }

}
