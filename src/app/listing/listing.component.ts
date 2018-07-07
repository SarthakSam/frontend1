import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import {Router, ActivatedRoute} from '@angular/router';
import { BooksProviderService } from '../books-provider.service'; 
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  isUser=false;
  user: User = null;
  searchString: string ="";
 //   {
 //   email: "",
 //   firstname: "",
 //   lastname: "",
 //   username: "",
 //   about: "",
 //   college: "",
 //   address: "",
 //   mobileno: ""
 // };


 constructor(private router: ActivatedRoute,
   private route: Router,public booksProviderService: BooksProviderService) { 
   }

 ngOnInit() {
   console.log(this.isUser);
   this.getUserData();
 }

 getUserData(){
   if(!this.isUser)
   this.booksProviderService.getUser().subscribe(res => {
     console.log("getRequest",res);
     if(res["statusCode"]!=400){
     this.isUser=true;
     this.user= new User(res["email"],res["firstname"],res["lastname"],res["username"],res["about"],res["college"],res["address"],res["mobileNo"]);    
     } 
   });
 }
 signin(){
   this.route.navigate(['signin']);
 }

 signup(){
   this.route.navigate(['signup']);
 }

 wishlist(){
  this.route.navigate(['wishlist']);
}

mymessages(){
  this.route.navigate(['messages']);
}

searchForBook(str){
  // console.log(str.value)
  this.searchString=str.value;
  str.value="";
  this.route.navigate(['filter',3], { relativeTo: this.router});
}

}
