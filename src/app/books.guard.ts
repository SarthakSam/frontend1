import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable,of } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import { BooksProviderService } from './books-provider.service';

@Injectable({
  providedIn: 'root'
})
export class BooksGuard implements CanActivate {
  public isUserAuthenticated: boolean = false;

  constructor(public booksProviderService: BooksProviderService){
  }

  makeCall(){
  //   this.booksProviderService.getUser().subscribe(res => {
  //     console.log("getRequest",res);
  //     if(res["statusCode"]==200){
  //       console.log("Authenticated");
  //               this.isUserAuthenticated=true;
  //       } 
  //   });
  let response=this.booksProviderService.getUser();
  response.subscribe(res => {
        console.log("getRequest",res);
        if(res["statusCode"]==200){
          console.log("Authenticated");
                  this.isUserAuthenticated=true;
          } 
  })
}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAuthenticated();
  }

  isAuthenticated(): boolean{
     if(!this.isUserAuthenticated){
      this.makeCall();
     }
       
    return this.isUserAuthenticated;
  }  
}
