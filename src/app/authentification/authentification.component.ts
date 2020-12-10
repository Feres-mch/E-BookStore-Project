import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private router:Router) { }

  

  ListUsers : User [] = [ 
    { usernamer : 'FeresMechmech', password : '27147231'}
  ] ;  

  UserName:string;
  PassWord:string;
  loginVal:boolean = false; 
  formlogin : FormGroup ; 
 
  


  login (UserName,PassWord) { 

    for (let i of this.ListUsers) {

      if (UserName === i.usernamer  && PassWord === i.password ) {
        this.router.navigate(['Paged_acc']);
} 
else  this.loginVal = true ;
  }}

ngOnInit(): void {
  
  this.formlogin = new FormGroup ({
    UserName :  new FormControl ('feres') ,
    PassWord : new FormControl ('mechmech') , 
})
}}

