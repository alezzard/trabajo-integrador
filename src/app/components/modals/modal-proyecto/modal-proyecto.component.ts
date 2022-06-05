import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['../modals.css']
})
export class ModalProyectoComponent implements OnInit {
  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  formProyecto: FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.formProyecto = this.formBuilder.group({
      nombre:['',[Validators.maxLength(45)]],
      periodo:['',[Validators.maxLength(25)]],
      descripcion:['',[Validators.maxLength(250)]],
      imgLogo:['',[Validators.maxLength(2000)]],
      link:['',[Validators.maxLength(2000)]]
    })
  }

  onClickButtonEdit(event : MouseEvent){
    this.click.emit(event);
  }
  onClickButtonDelete(event : MouseEvent){
    this.click.emit(event);
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
