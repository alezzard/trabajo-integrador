import { Component, OnInit } from '@angular/core';
import { habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades : habilidad[] = [];

  constructor(private habilidadService : HabilidadService) { }

  ngOnInit(): void {
    this.habilidadService.getHabilidades().subscribe(data =>{this.habilidades = data})
  }

}
