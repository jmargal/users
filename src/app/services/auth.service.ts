import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class authService {
  loggedIn: boolean = false;

  constructor() {}

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }
}
