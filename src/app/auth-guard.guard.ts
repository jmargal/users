import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { authService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';
import { userService } from './services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate, CanActivateChild {
  constructor(private authService: authService, private router: Router,private cookSvc:CookieService,private userService:userService) {}
 
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean> | boolean {
  //   return this.authService.isAuthenticated().then((authenticated: boolean) => {
  //     //Si se resuelve devuelve true
  //     if (authenticated) {
  //       return true;
  //     }
  //     //Si no se resuelve redirige a el raiz
  //     else {
  //       return this.router.navigate(['/']);
  //     }
  //   });
  // }
  // canActivateChild(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean> | boolean {
  //   return this.canActivate(route, state);
  // }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     return this.authService.isAuthenticated();
  }

  canActivateChild(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.isAuthenticated();
  }


 
}
