import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../service/book.service';
import { Book } from '../model/book';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book : Book = new Book () ; 
  constructor(private myService : BookService, private router:Router) { }

  Ajouter () {
    this.myService.AddData(this.book).subscribe(res => this.router.navigate(['bookList']))  ;  
     } 
 
     BookForm  : FormGroup ;
  
   ngOnInit(): void {
 
     this.BookForm = new FormGroup ({
      
       name : new FormControl ('Book Name',Validators.required) , 
       writer : new FormControl ('Paulo Cohelo, etc ...',[Validators.required, Validators.required]) , 
       rating :  new FormControl ('5',Validators.required) ,
      category :  new FormControl ('Horror-Psychology-Kids',Validators.required) 
      
     })
   }
}
