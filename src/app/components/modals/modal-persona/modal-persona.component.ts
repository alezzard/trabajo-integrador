import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-persona',
  templateUrl: './modal-persona.component.html',
  styleUrls: ['../modals.css']
})
export class ModalPersonaComponent implements OnInit {
  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  formPersona: FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.formPersona = this.formBuilder.group({
      nombre:['',[Validators.maxLength(45)]],
      apellido:['',[Validators.maxLength(45)]],
      titulo:['',[Validators.maxLength(25)]],
      descripcion:['',[Validators.maxLength(250)]],
      imgPerfil:['',[Validators.maxLength(2000)]],
      linkedin:['',[Validators.maxLength(2000)]],
      instagram:['',[Validators.maxLength(2000)]],
      github:['',[Validators.maxLength(2000)]]
    })
  }

  onClickButtonEdit(event : MouseEvent){
    this.click.emit(event);
  }
  onClickButtonDelete(event : MouseEvent){
    this.click.emit(event);
  }

  get Nombre(){
    return this.formPersona.get("nombre");
  }

  get Apellido(){
    return this.formPersona.get("apellido");
  }
  get Titulo(){
    return this.formPersona.get("titulo");
  }
  get Descripcion(){
    return this.formPersona.get("descripcion");
  }
  get ImgPerfil(){
    return this.formPersona.get("imgPerfil");
  }
  get Linkedin(){
    return this.formPersona.get("linkedin");
  }
  
  get Instagram(){
    return this.formPersona.get("instagram");
  }
  
  get Github(){
    return this.formPersona.get("github");
  }
  

  ngOnInit(): void {
  }

}
