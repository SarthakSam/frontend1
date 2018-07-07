import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable,of } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import { BooksProviderService } from './books-provider.service';
// import { ListingComponent } from './listing/listing.component';

@Injectable({
  providedIn: 'root'
})
export class BooksGuard implements CanActivate {
  // public isUserAuthenticated: boolean = false;

  constructor(public booksProviderService: BooksProviderService){
  }

//   makeCall(){
//     this.booksProviderService.getUser().subscribe(res => {
//       console.log("getRequest",res);
//       if(res["statusCode"]==200){
//         console.log("Authenticated");
//                 this.isUserAuthenticated=true;
//         } 
//     });
// }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // console.log(this.listingComponent.isUser)
      // if(this.listingComponent.isUser)
      //   return true;
      // else
      //   return false;
      return true;
  }

  // // isAuthenticated(): boolean{
  // //    if(!this.isUserAuthenticated){
  // //     this.makeCall();
  // //    }
       
  //   return this.isUserAuthenticated;
  // }  
}
