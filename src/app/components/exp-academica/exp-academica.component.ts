import { Component, Input, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-exp-academica',
  templateUrl: './exp-academica.component.html',
  styleUrls: ['./exp-academica.component.css']
})
export class ExpAcademicaComponent implements OnInit {
  experiencias : experiencia[] = [];

  @Input() editable?: boolean;

  constructor(private experienciaService : ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.getExperienciasAcademicas().subscribe(data =>{this.experiencias = data});
  }

}
