import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor( private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (false) {
      return true;
    } 
    else {
      this.router.navigate(['home/signin'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
