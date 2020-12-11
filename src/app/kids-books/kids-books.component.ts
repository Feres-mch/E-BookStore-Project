import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-kids-books',
  templateUrl: './kids-books.component.html',
  styleUrls: ['./kids-books.component.css']
})
export class KidsBooksComponent implements OnInit {

  book : Book; 
  ListBook : Book [] ;  
  
  
  constructor(private myService : BookService) { }

  ngOnInit(): void {

    this.myService.GetData().subscribe( (data : Book [] )  => this.ListBook= data ); 

   



  }

}