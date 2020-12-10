import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http' ; 
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url: string = "http://localhost:3000/books"; 

  constructor(private http:HttpClient) { }

  // afficher les données
  GetData () : Observable<Book[]> {

    return this.http.get<Book[]>(this.url);
}

// informer du format qu'on prévoit utiliser
httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

// ajouter des données
AddData(myObject:Book): Observable<Book>{
  return this.http.post<Book>(this.url, myObject, this.httpOptions); } 

// modifier
UpdateData(id:number,myObject:Book): Observable<Book>{
    return this.http.put<Book>(this.url+'/'+ id, myObject, this.httpOptions); }
    
// supprimer
DeleteData (myObject: Book | number): Observable<Book> {
      const id = typeof myObject ==='number'?myObject : myObject.id;
      return this.http.delete<Book>(this.url+'/'+id); 
      }
      
// get by id
      GetBookById(id : number):Observable<Book>{
        return this.http.get<Book>(this.url+'/'+id);
      } 

      GetBookByCategory (category : string) : Observable<Book []> { 
        return this.http.get<Book []>(this.url+'/'+category) ; 
      }



}
