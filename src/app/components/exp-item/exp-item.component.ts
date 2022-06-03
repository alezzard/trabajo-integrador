import { Component, Input, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';

@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.css']
})
export class ExpItemComponent implements OnInit {
   @Input() exp: experiencia = new experiencia("","","","");

   @Input() editable?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
