import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private myService :UserService , private router:Router) { }
 

  UserName:string;
  PassWord:string;
  ListUsers : User []; 
  loginVal:boolean = false;
 
  


  ngOnInit(): void {
  
    this.myService.GetUser().subscribe((data : User [])=>this.ListUsers= data) ;  
  
  } 
  
  login (UserName : string, PassWord : string) { 
  
    for (let i of this.ListUsers) {
  
      if (UserName === i.username  && PassWord === i.password ) {
        const id:number = i.id ; 
        this.router.navigate(['Paged_acc']);
  } 
  else  this.loginVal = true ;
  }}
  }




