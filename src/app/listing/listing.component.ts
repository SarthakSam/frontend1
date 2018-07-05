import { Component, OnInit } from '@angular/core';
import { BooksProviderService } from '../books-provider.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  listing:any;
   
  constructor(public booksProviderService: BooksProviderService) {
       
   }

  ngOnInit() {
   this.getData();
  }

  getData(){
    this.booksProviderService.getBooksData().subscribe(res => {
      this.listing=res;
      console.log(this.listing)
    });
  } 

}
