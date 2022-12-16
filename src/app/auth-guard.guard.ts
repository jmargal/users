import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  CanMatch,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { authService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: authService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((authenticated: boolean) => {
      if (authenticated) {
        return true;
      } 
      lse {
        this.router.navigate(['/']);
      }
    });
  }
}
