import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { LoginService } from 'src/app/services/login.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  persona:persona = new persona(0,"","","","","","","","");

  editable: boolean;

  constructor(private personaService: PersonaService,private loginService: LoginService) {
    this.editable = loginService.loggedIn();
   }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data});
  }


}
