import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private loginService: LoginService) {
    this.isLoggedIn = this.loginService.loggedIn();
    
   }

  ngOnInit(): void {
  }

}
