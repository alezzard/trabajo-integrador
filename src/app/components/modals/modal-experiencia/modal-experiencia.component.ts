import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['../modals.css']
})
export class ModalExperienciaComponent implements OnInit {
  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  formExperiencia: FormGroup;
  
  constructor(private formBuilder:FormBuilder) {
    this.formExperiencia = this.formBuilder.group({
      titulo:['',[Validators.maxLength(45)]],
      periodo:['',[Validators.maxLength(25)]],
      descripcion:['',[Validators.maxLength(250)]],
      imgLogo:['',[Validators.maxLength(2000)]]
    })
  }

  onClickButtonEdit(event : MouseEvent){
    this.click.emit(event);
  }
  onClickButtonDelete(event : MouseEvent){
    this.click.emit(event);
  }
  
get Titulo(){
  return this.formExperiencia.get("titulo");
}
get Periodo(){
  return this.formExperiencia.get("periodo");
}
get Descripcion(){
  return this.formExperiencia.get("descripcion");
}
get ImgLogo(){
  return this.formExperiencia.get("imgLogo");
}

  ngOnInit(): void {
  }

}
