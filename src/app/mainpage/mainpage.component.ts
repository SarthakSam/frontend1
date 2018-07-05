import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {Router, ActivatedRoute} from '@angular/router';
import { BooksProviderService } from '../books-provider.service';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
   isUser=false;
   user: User = null;
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
      this.getUserData();
      console.log(this.user);
    }

  ngOnInit() {
    console.log(this.isUser);
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
}
