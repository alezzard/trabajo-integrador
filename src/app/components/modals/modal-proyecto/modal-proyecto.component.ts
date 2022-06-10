import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ProyectosComponent } from '../../proyectos/proyectos.component';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['../modals.css']
})
export class ModalProyectoComponent implements OnInit {
  @Input() proy: proyecto = new proyecto(0,"","","","","");

  formProyecto: FormGroup;

  constructor(private formBuilder:FormBuilder, private proyetoService: ProyectoService) { 
    this.formProyecto = this.formBuilder.group({
      nombre:['',[Validators.minLength(3),Validators.maxLength(45)]],
      periodo:['',[Validators.minLength(3),Validators.maxLength(25)]],
      descripcion:['',[Validators.minLength(3),Validators.maxLength(250)]],
      imgLogo:['',[Validators.maxLength(2000)]],
      link:['',[Validators.maxLength(2000)]]
    })
  }

  onClickButtonEdit(event : MouseEvent){
    event.preventDefault();
    this.proyetoService
    .putProyecto(this.proy.id,this.formProyecto.value)
    .subscribe();
  }
  onClickButtonDelete(event : MouseEvent){
    this.proyetoService
    .deleteProyecto(this.proy.id)
    .subscribe(); 
  }

  get Nombre(){
    return this.formProyecto.get("nombre");
  }
  get Periodo(){
    return this.formProyecto.get("periodo");
  }
  get Descripcion(){
    return this.formProyecto.get("descripcion");
  }
  get ImgLogo(){
    return this.formProyecto.get("imgLogo");
  }
  get Link(){
    return this.formProyecto.get("link");
  }
  
  ngOnInit(): void {
  }

}
