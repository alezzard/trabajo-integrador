import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor(private loginService: LoginService, private formBuilder:FormBuilder,private rutas:Router) { 
    this.form = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

 get Email(){ return this.form.get("email");} 
 
 get Password(){ return this.form.get("password");} 
  
  onEnviar(event:Event){
    event.preventDefault();
    this.loginService.login(this.form.value).subscribe(data => {
      console.log("datos recividos de la api"+JSON.stringify(data));
      this.rutas.navigate(['portfolio'])
  })
  }

  ngOnInit(): void {
  }
}
