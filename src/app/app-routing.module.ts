import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PageDAccueilComponent } from './page-d-accueil/page-d-accueil.component';
import { PshychologyBooksComponent } from './pshychology-books/pshychology-books.component';
import { HorrorBooksComponent } from './horror-books/horror-books.component';
import { KidsBooksComponent } from './kids-books/kids-books.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';


const routes: Routes = [
  
  { path : 'Auth'    , component : AuthentificationComponent} ,  
  { path : 'Paged_acc'  , component : PageDAccueilComponent} , 
  { path : 'Psychology' , component : PshychologyBooksComponent} ,
  { path : 'Horror' , component : HorrorBooksComponent}, 
  { path : 'Kids' , component : KidsBooksComponent},
  { path : 'bookList' , component : BookListComponent},
  { path : 'AddBook' , component : AddBookComponent} , 
  { path : 'UpdateBook/:id' , component : UpdateBookComponent} ,
  { path : ''           , component : AuthentificationComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
