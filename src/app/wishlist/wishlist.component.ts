import { Component, OnInit } from '@angular/core';
import { BooksProviderService } from '../books-provider.service'; 
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist: any;
  userId: number;
  booksArray: any[]=[];
  constructor(private router: ActivatedRoute,
  private route: Router,public booksProviderService: BooksProviderService) { }

  ngOnInit() {
    this.booksProviderService.getUser().subscribe(res => {
      this.userId=res["id"];
      
      this.booksProviderService.getWishlist(this.userId).subscribe(res => {
        this.wishlist = res;
        console.log(this.wishlist);
        for(let i=0;i< this.wishlist.length;i++){
          this.booksProviderService.getParticularBook(this.wishlist[i].bookid).subscribe(res => {
            console.log(res);
            this.booksArray.push(res);
          });    
          }
        
      });
    })
   
  }

}
