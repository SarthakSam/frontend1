import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap,Router} from "@angular/router";
import { ListingComponent } from '../listing/listing.component';
import { BooksProviderService } from '../books-provider.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  selected: number=0;
  listing: any;
  length: number =0;
  constructor(private router: ActivatedRoute,
    private route: Router,public listingComponent: ListingComponent,public booksProviderService: BooksProviderService) { }

  ngOnInit() {
    this.router.paramMap.subscribe( (params: ParamMap) =>{
      this.selected = +(params.get('id'));
      // console.log(this.selected)
      if(this.selected===1||this.selected===2){
        this.booksProviderService.filterBy(this.selected).subscribe(res => {
          // console.log(res);
          this.listing=res;
          this.length=this.listing.length;  
        });
      }
      else if(this.selected===3){
            //  console.log(this.listingComponent.searchString); 
            this.booksProviderService.search(this.listingComponent.searchString).subscribe(res => {
              console.log(res);
              this.listing=res;
              this.length=this.listing.length;
            });
            
      }
    })
  }
  viewBook(book){
    // console.log("in view book",book);
    if(this.listingComponent.isUser)
    this.route.navigate(['listing/books',book.id]);
    else
    this.route.navigate(['signin'])
 }
}
