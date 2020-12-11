import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { PageDAccueilComponent } from './page-d-accueil/page-d-accueil.component';
import { PshychologyBooksComponent } from './pshychology-books/pshychology-books.component';
import { HorrorBooksComponent } from './horror-books/horror-books.component';
import { KidsBooksComponent } from './kids-books/kids-books.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { RouterModule } from '@angular/router' ;
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { StarComponent } from './star/star.component';
import { IWantComponent } from './iwant/iwant.component';
import { IHaveComponent } from './ihave/ihave.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PageDAccueilComponent,
    PshychologyBooksComponent,
    HorrorBooksComponent,
    KidsBooksComponent,
    AuthentificationComponent,
    AddBookComponent,
    UpdateBookComponent,
    StarComponent,
    IWantComponent,
    IHaveComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
