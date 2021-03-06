import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-modal-persona',
  templateUrl: './modal-persona.component.html',
  styleUrls: ['../modals.css']
})
export class ModalPersonaComponent implements OnInit {
  @Input() pers: persona = new persona(0, "", "", "", "", "", "", "", "")
  newPers: persona = new persona(0, "", "", "", "", "", "", "", "")
  
  @Input() option: number = 0;

  formPersona: FormGroup;

  constructor(private formBuilder:FormBuilder, private personaService: PersonaService) { 
    this.formPersona = this.formBuilder.group({
      fullName:['',[Validators.maxLength(90)]],
      titulo:['',[Validators.maxLength(25)]],
      descripcion:['',[Validators.maxLength(250)]],
      imgBanner:['',[Validators.maxLength(2000)]],
      imgPerfil:['',[Validators.maxLength(2000)]],
      linkedin:['',[Validators.maxLength(2000)]],
      instagram:['',[Validators.maxLength(2000)]],
      github:['',[Validators.maxLength(2000)]]
    })
  }
  //manejar las diferentes opciones para poder editar solo los campos de interes y mantener el resto intacto.
  
  onClickButtonEditRedes(event : MouseEvent){
    event.preventDefault();
    this.newPers = this.pers;
    this.newPers.linkedin = this.formPersona.value.linkedin;
    this.newPers.instagram = this.formPersona.value.instagram;
    this.newPers.github = this.formPersona.value.github;
    this.personaService
    .putPersona(this.pers.id,this.newPers)
    .subscribe();
  }
  
  onClickButtonEditImgBanner(event : MouseEvent){
    event.preventDefault();
    this.newPers = this.pers;
    this.newPers.imgBanner = this.formPersona.value.imgBanner;
    this.personaService
    .putPersona(this.pers.id,this.newPers)
    .subscribe();
  }
  
  onClickButtonEditImgPerfil(event : MouseEvent){
    event.preventDefault();
    this.newPers = this.pers;
    this.newPers.imgPerfil = this.formPersona.value.imgPerfil;
    this.personaService
    .putPersona(this.pers.id,this.newPers)
    .subscribe();
  }
  
  onClickButtonEditFullName(event : MouseEvent){
    event.preventDefault();
    this.newPers = this.pers;
    this.newPers.fullName = this.formPersona.value.fullName;
    this.personaService
    .putPersona(this.pers.id,this.newPers)
    .subscribe();
  }
  onClickButtonEditDescripcion(event : MouseEvent){
    event.preventDefault();
    this.newPers = this.pers;
    this.newPers.descripcion = this.formPersona.value.descripcion;
    this.personaService
    .putPersona(this.pers.id,this.newPers)
    .subscribe();
  }
  onClickButtonDeleteDescripcion(event : MouseEvent){
    this.newPers = this.pers;
    this.newPers.descripcion = '';
    this.personaService
    .putPersona(this.pers.id,this.newPers)
    .subscribe();
  }

  get FullName(){
    return this.formPersona.get("fullName");
  }

  get Titulo(){
    return this.formPersona.get("titulo");
  }
  get Descripcion(){
    return this.formPersona.get("descripcion");
  }
  get ImgBanner(){
    return this.formPersona.get("imgBanner");
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
