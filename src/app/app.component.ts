import { Component, OnInit } from '@angular/core';

import {LoginService} from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'login';
  public email = "";
  public password = "";

  constructor(private router: Router,
    private loginComponentService: LoginService,
    private route: ActivatedRoute) { }
  
  ngOnInit() { }
 
  ejecutarAccion() {
   email:this.email
   password: this.password
  
  if(this.email === null || this.password === null){
    console.log ("Datos erroneos");
    };
    return;
  
  this.loginComponentService.validateUser(formLogin).subscribe(dataFinal => {
    if (dataFinal.access_token) {
      localStorage.setItem('token', dataFinal.access_token);
      this.router.navigate(['/dashboard'])
      
    }
  
  },
    error => {
      if (error.Errors.message.includes('username') || error.Errors.message.includes('invalid_database')) {
        console.log ("Datos erroneos");
      } else {
        console.log ("Datos erroneos");
      }
    }
  
}
