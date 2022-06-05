import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-habilidad',
  templateUrl: './modal-habilidad.component.html',
  styleUrls: ['../modals.css']
})
export class ModalHabilidadComponent implements OnInit {
  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  formHabilidad: FormGroup;
  
  constructor(private formBuilder:FormBuilder) {
    this.formHabilidad = this.formBuilder.group({
      porcentaje:['',[Validators.maxLength(3)]],
      imgLogo:['',[Validators.maxLength(2000)]]
    })
  }

  onClickButtonEdit(event : MouseEvent){
    this.click.emit(event);
  }
  onClickButtonDelete(event : MouseEvent){
    this.click.emit(event);
  }

  get Porcentaje(){
    return this.formHabilidad.get("porcentaje");
  }
  get ImgLogo(){
    return this.formHabilidad.get("imgLogo");
  }

  ngOnInit(): void {
  }

}
