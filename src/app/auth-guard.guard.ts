import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { authService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: authService, private router: Router,private cookSvc:CookieService) {}

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

  canActivate():boolean {
      if(this.cookSvc.get("login")==='true'){
        return true;
      }
      else{
        this.router.navigate(['/']);
        return false;
      }
  }
}
