import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
 book : Book ; 
  ListBooks : Book [] ; 
  z : string ;
   
  ListFilter : string = '' ; 
  constructor(private myService : BookService)   { }

  onRatingClicked (message : string) : void { 
   this.z =  message ;  

  }

  ngOnInit(): void {
    this.getAllUsers () ; 
  }
getAllUsers () { 
  this.myService.GetData().subscribe( (data : Book [] )  => this.ListBooks= data ); 
}
public DeleteBook(objToDelete : Book | number): void{
  this.myService.DeleteData(objToDelete).subscribe(next => this.myService.GetData().subscribe( (data : Book [] ) => {this.ListBooks= data}));
      
  }
}
