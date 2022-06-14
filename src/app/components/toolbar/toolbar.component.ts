import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() persona?:persona;
  editable: boolean;
  constructor(private rutas:Router, private loginService: LoginService) {
    this.editable = loginService.loggedIn();
   }

  onIngresar(event:Event){
    this.rutas.navigate(['login'])
  }
  onSalir(event:Event){
    sessionStorage.removeItem('currentUser');
  }

  ngOnInit(): void {
  }

}
