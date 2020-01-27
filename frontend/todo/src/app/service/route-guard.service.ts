import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})

export class RouteGuardService implements CanActivate {
  constructor(private basicAuthenticationService: BasicAuthenticationService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.basicAuthenticationService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false
    }
  }

}
