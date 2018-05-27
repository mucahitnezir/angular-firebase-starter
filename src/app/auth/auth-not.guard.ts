import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { AuthService } from './auth.service';

@Injectable()
export class AuthNotGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const isLoggedIn = this.authService.isAuthenticated;

    if (isLoggedIn) {
      this.router.navigate(['/']);
      return false;
    }

    return this.authService.currentUserObservable
      .take(1)
      .map(user => {
        if (!user) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      });
  }

}
