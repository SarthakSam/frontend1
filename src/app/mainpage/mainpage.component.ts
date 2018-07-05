import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  
  //  user: User = {
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
    private route: Router) { }

  ngOnInit() {
  }

  signin(){
    this.route.navigate(['signin']);
  }

  signup(){
    this.route.navigate(['signup']);
  }
}
