import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-horror-books',
  templateUrl: './horror-books.component.html',
  styleUrls: ['./horror-books.component.css']
})
export class HorrorBooksComponent implements OnInit {

  book : Book; 
  ListBook : Book [] ;  
  
  
  constructor(private myService : BookService) { }

  ngOnInit(): void {

    this.myService.GetData().subscribe( (data : Book [] )  => this.ListBook= data ); 

   



  }

}
