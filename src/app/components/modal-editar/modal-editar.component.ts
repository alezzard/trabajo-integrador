import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.css']
})
export class ModalEditarComponent implements OnInit {
  @Input() tituloModal?: string;
  @Input() opcion?:number;
  form: FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group({
      porcentaje:['',[Validators.maxLength(3)]],
      link:['',[Validators.maxLength(2000)]],
      nombre:['',[Validators.maxLength(45)]],
      periodo:['',[Validators.maxLength(25)]],
      descripcion:['',[Validators.maxLength(250)]],
      imgLogo:['',[Validators.maxLength(2000)]]
    })
  }

get Porcentaje(){
  return this.form.get("porcentaje");
}
get Link(){
  return this.form.get("link");
}
get Nombre(){
  return this.form.get("nombre");
}
get Periodo(){
  return this.form.get("periodo");
}
get Descripcion(){
  return this.form.get("descripcion");
}
get ImgLogo(){
  return this.form.get("imgLogo");
}
  ngOnInit(): void {
  }

}
