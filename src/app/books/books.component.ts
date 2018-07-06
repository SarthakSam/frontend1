import { Component, OnInit } from '@angular/core';
import { BooksProviderService } from '../books-provider.service';
import {ListingComponent } from '../listing/listing.component';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  listing:any;

  constructor(private router: ActivatedRoute,
    private route: Router,public booksProviderService: BooksProviderService,public listingComponent: ListingComponent) {
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

  addBook(){
    //  console.log(this.mainpageComponent.user);
    if(!this.listingComponent.user)
       this.route.navigate(['signin']);
    else{
       this.route.navigate(['listing/add']); 
    }
  }


}
