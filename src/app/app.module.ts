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
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
