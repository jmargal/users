import { Injectable } from '@angular/core';
import { userService } from './user.service';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class authService {
  loggedIn: boolean = false;

  constructor(private userService: userService,private cookieSvc: CookieService) {}

  login(name: string, pass: string): void {
    this.userService.getUser(name).subscribe({
      next: (user) => {
        if (user[0].password === pass) {
          this.loggedIn = true;
          this.cookieSvc.set('login', 'true');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  logout(): void {
    this.loggedIn = false;
    this.cookieSvc.set('login', 'false');
  }

  isAuthenticated() {
    return this.loggedIn;
  }
}
