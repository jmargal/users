import { Injectable } from '@angular/core';
import { User } from '../interfaces/userInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class userService {
  constructor(private http: HttpClient, private cookieSvc: CookieService) {}

  private url: string = 'http://localhost:8000/users';

  getUser(name: string): Observable<User[]> {
    return this.http.get<User[]>(this.url + '?name=' + name);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
