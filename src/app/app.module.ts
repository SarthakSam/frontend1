import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { FileSelectDirective } from 'ng2-file-upload';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AddComponent } from './add/add.component';
import { BooksComponent } from './books/books.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { BooksGuard } from './books.guard';
import { CartComponent } from './cart/cart.component';
import { MessagesComponent } from './messages/messages.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listing/books',
    pathMatch: 'full'
  },
  {
    path: 'listing',
    component: ListingComponent,
    children: [
                {
                  path: 'books',
                  component: BooksComponent
                },
                {
                  path: 'add',
                  component: AddComponent
                  // canActivate: [BooksGuard]
                },
                {
                  path: 'books/:id',
                  component: BookdetailComponent
                  // canActivate: [BooksGuard]
                }
              ]
  }, 
  {
     path: 'signin',
     component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    SigninComponent,
    SignupComponent,
    AddComponent,
    BooksComponent,
    FileSelectDirective,
    BookdetailComponent,
    CartComponent,
    MessagesComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    // FormsModule
  ],
  providers: [BooksGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
