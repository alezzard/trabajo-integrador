import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() persona?:persona;

  constructor(private rutas:Router) { }

  onIngresar(event:Event){
    this.rutas.navigate(['login'])
  }

  ngOnInit(): void {
  }

}
