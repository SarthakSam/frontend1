import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import { BooksProviderService } from '../books-provider.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  bookId: number=0; 
  bookDetails: any;
  
  seller: string = "anonymous";
  constructor(private router: ActivatedRoute,public booksProviderService: BooksProviderService) {
   }

  ngOnInit() {
    this.router.paramMap.subscribe( (params: ParamMap) =>{
      this.bookId = +(params.get('id'));
      // console.log(this.bookId);
      this.booksProviderService.getParticularBook(this.bookId).subscribe(res => {
        this.bookDetails=res;
       });
      //  this.booksProviderService.getParticularBook(this.bookId).subscribe(res => {
      //   this.bookDetails=res;
      //  });
    });
  }
  
   

}
