import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() label?: string;
  @Input() par?: boolean;
  @Output() click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() { 
    this.par = true;
  }

  onClickButtonEdit(event : MouseEvent){
    this.click.emit(event);
  }
  onClickButtonDelete(event : MouseEvent){
    this.click.emit(event);
  }

  ngOnInit(): void {
  }

}
