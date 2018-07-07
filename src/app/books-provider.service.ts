import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BooksProviderService {

  constructor(private http: HttpClient) { }

  getBooksData(){
    console.log("getting Books");
    return this.http.get('/api/listings');
  }

   getParticularBook(bookId: number){
     console.log("bookservice",bookId)
    return this.http.get('/api/listings/'+bookId);
   }

  getUser(){
    console.log("getting user");
    return this.http.get('/getUser');
  }

  postAddToWishlist(book){
    console.log("making post request to wishlist");
    return this.http.post('/api/wishlist',book,httpOptions);
 }

   getSeller(sellerId: number){
    console.log("getting seller");
    return this.http.get('/getUser/'+sellerId);
   }

   getWishlist(id){
    return this.http.get('/api/wishlist/'+id);
   }

   postMessage(messageObj){
      return  this.http.post('/api/messages',messageObj,httpOptions);
   }

   getMessages(userId: number){
    return this.http.get('/api/messages/'+userId);      
   }

}
