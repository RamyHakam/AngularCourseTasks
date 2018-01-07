import { SigninService } from './../Servcies/signin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  //define user data 
  email:string;
  password:string;
  status:boolean;
  error:boolean;
  constructor( private signin:SigninService ,private router:Router) { }

  ngOnInit() {
  }
  //signin  fucntion
  signIn(){
    //call for service 
    this.status=this.signin.login(this.email,this.password);
    if(this.status){
      this.router.navigate(['home/1234']);

    }
    else{
      this.error=true;
    }
  }

}
