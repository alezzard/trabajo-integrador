import { Component, Input, OnInit } from '@angular/core';
import { habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades : habilidad[] = [];

  editable: boolean;

  constructor(private habilidadService : HabilidadService, private loginService: LoginService) { 
    this.editable = loginService.loggedIn();}

  ngOnInit(): void {
    this.habilidadService.getHabilidades().subscribe(data =>{this.habilidades = data})
  }

}
