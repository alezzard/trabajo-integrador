import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-exp-labral',
  templateUrl: './exp-labral.component.html',
  styleUrls: ['./exp-labral.component.css']
})
export class ExpLabralComponent implements OnInit {
  experiencias : experiencia[] = [];

  constructor(private experienciaService : ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.getExperienciasLaborales().subscribe(data =>{this.experiencias = data});
  }

}
