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
  public listFilter: number=0;

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

  public addBook(){
    //  console.log(this.mainpageComponent.user);
    if(!this.listingComponent.user)
       this.route.navigate(['signin']);
    else{
       this.route.navigate(['listing/add']); 
    }
  }
 

   viewBook(book){
      // console.log("in view book",book);
      if(this.listingComponent.isUser)
      this.route.navigate([book.id], { relativeTo: this.router});
      else
      this.route.navigate(['signin'])
   }


}
