import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book : Book; 
  ListBook : Book [] ; 
  
  constructor(private User_service : BookService,private ActivatedRoute : ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(res => this.User_service.GetBookById(Number(res.get('id'))).subscribe(res => this.book=res));
  }

  UpdateBook(book : Book):void{
    this.User_service.UpdateData(this.book.id,book).subscribe( res => this.router.navigate(['bookList']));
   
  }

}
