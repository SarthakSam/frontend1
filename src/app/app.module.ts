import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mainpage/listing',
    pathMatch: 'full'
  },
  {
    path: 'mainpage',
    component: MainpageComponent,
    children: [
      {
        path: 'listing',
        component: ListingComponent
      }
    ]
  }, 
  {
     path: 'signin',
     component: SigninComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    MainpageComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }