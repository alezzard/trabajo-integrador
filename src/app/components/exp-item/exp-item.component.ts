import { Component, Input, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.css']
})
export class ExpItemComponent implements OnInit {
   @Input() exp: experiencia = new experiencia(0,"","","","");

    editable: boolean;

  constructor(private loginService: LoginService) {
    this.editable = loginService.loggedIn();
   }

  ngOnInit(): void {
  }

}
