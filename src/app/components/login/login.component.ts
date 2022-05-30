import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;

  constructor(private loginService: LoginService, private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

 get Email(){ return this.form.get("email");} 
 
 get Password(){ return this.form.get("password");} 
  
  login(){
    const user = {email: this.form.get("email"), password : this.form.get("password")};
    this.loginService.login(user).subscribe(data => {
      console.log(data);
      this.loginService.setToken(data.token);
      //puedo desde acá navegar de nuevo al portfoio
    })
  }
  ngOnInit(): void {
  }
}
