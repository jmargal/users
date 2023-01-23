import { Injectable } from '@angular/core';
import { User } from '../interfaces/userInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { find, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class userService {
  
  constructor(private http: HttpClient,private cookieSvc:CookieService) {}

  private url: string = 'http://localhost:8000/users';

  getUser(name: string): Observable<User[]> {
    return this.http.get<User[]>(this.url + '?name=' + name);
  }

  getUsers(): Observable<User[]> {
    const token = this.cookieSvc.get('token');
    const cabecera: HttpHeaders = new HttpHeaders();
    cabecera.set('Authorization', 'Bearer ' + token);
    return this.http.get<User[]>(this.url, {headers: cabecera} );
  }
}
