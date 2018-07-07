import { Component, OnInit } from '@angular/core';
import { BooksProviderService } from '../books-provider.service'; 

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: any;
  length: number =0;
  constructor(public booksProviderService: BooksProviderService) { }

  ngOnInit() {
    this.booksProviderService.getUser().subscribe(res => {
      
      this.booksProviderService.getMessages(res["id"]).subscribe(res => {
       console.log(res);
       this.messages= res;
       length=this.messages.length;
        // for(let i=0;i< this.wishlist.length;i++){
        //   this.booksProviderService.getParticularBook(this.wishlist[i].bookid).subscribe(res => {
        //     console.log(res);
        //     this.booksArray.push(res);
        //   });    
        //   }
        
      });
    })

  }

}
