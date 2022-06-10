import { Component,  Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-modal-habilidad',
  templateUrl: './modal-habilidad.component.html',
  styleUrls: ['../modals.css']
})
export class ModalHabilidadComponent implements OnInit {
  @Input() hab: habilidad = new habilidad(0,"",0)

  formHabilidad: FormGroup;
  
  constructor(private formBuilder:FormBuilder, private habilidadService: HabilidadService) {
    this.formHabilidad = this.formBuilder.group({
      porcentaje:['',[Validators.minLength(1),Validators.maxLength(3)]],
      imgLogo:['',[Validators.maxLength(2000)]]
    })
  }

  onClickButtonEdit(event : MouseEvent){
    event.preventDefault();
    this.habilidadService
    .putHabilidad(this.hab.id,this.formHabilidad.value)
    .subscribe();
  }
  onClickButtonDelete(event : MouseEvent){
    this.habilidadService
    .deleteHabilidad(this.hab.id)
    .subscribe();
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
