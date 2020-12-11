import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pshychology-books',
  templateUrl: './pshychology-books.component.html',
  styleUrls: ['./pshychology-books.component.css']
})
export class PshychologyBooksComponent implements OnInit {

  book : Book; 
  ListBook : Book [] ;  
  
  
  constructor(private myService : BookService, private ActivatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.myService.GetData().subscribe( (data : Book [] )  => this.ListBook= data ); 

   



  }

}
