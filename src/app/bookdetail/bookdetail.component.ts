import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import { BooksProviderService } from '../books-provider.service';
import { ListingComponent } from '../listing/listing.component';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  bookId: number=0; 
  bookDetails: any;
  userId: number=0;
  seller: string = "anonymous";

  constructor(private router: ActivatedRoute,public booksProviderService: BooksProviderService,public listingcomponent: ListingComponent) {
       
  }

  ngOnInit() {
    this.router.paramMap.subscribe( (params: ParamMap) =>{
      this.bookId = +(params.get('id'));
      // console.log(this.bookId);
    });
    this.booksProviderService.getParticularBook(this.bookId).subscribe(res => {
      this.bookDetails=res;
      this.booksProviderService.getSeller(res["seller"]).subscribe(res => {
        console.log("sellerName",res)
        if(res["username"])
        this.seller=res["username"];
      });
     });
     this.booksProviderService.getUser().subscribe(res => {
        this.userId=res["id"];
        console.log(this.userId)
       });
     
  }

  addToWishlist(){
    console.log(this.bookId,this.userId);
    this.booksProviderService.postAddToWishlist({bookid: this.bookId, userid: this.userId})
    .subscribe(res => {
     console.log(res);
      console.log(res["status"])
      if(res["bookid"]){
         alert("added to wishlist");
      }
      else if(res["message"]){
        alert("already wished ")
      }
      else{
        alert("unable to add to wishlist");
      }
    });
    console.log("added to cart");
  }
  
   

}
