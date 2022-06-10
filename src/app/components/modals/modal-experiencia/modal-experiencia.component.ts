import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['../modals.css']
})
export class ModalExperienciaComponent implements OnInit {
  //necesito capturar el id de la experiencia
  @Input() exp: experiencia= new experiencia(0,"","","","");

  formExperiencia: FormGroup;
  
  constructor(private formBuilder:FormBuilder, private experienciaService: ExperienciaService) {
    //posiblemente tenga que agragar validators para evitar que llegen vacios
    this.formExperiencia = this.formBuilder.group({
      titulo:['',[Validators.minLength(3),Validators.maxLength(45)]],
      periodo:['',[Validators.minLength(3),Validators.maxLength(25)]],
      descripcion:['',[Validators.minLength(3),Validators.maxLength(250)]],
      imgLogo:['',[Validators.maxLength(2000)]]
    })
  }

  onClickButtonEdit(event : MouseEvent){
    event.preventDefault();
    this.experienciaService
      .putExperiencia(this.exp.id,this.formExperiencia.value)
      .subscribe();
  }
  onClickButtonDelete(event : MouseEvent){
    //puedo lanzar una advertencia antes de borrar
    console.log("id:"+this.exp.id)
    console.log("titulo:"+this.exp.titulo)
    this.experienciaService
    .deleteExperiencia(this.exp.id)
    .subscribe();//faltaba el subscribe
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
