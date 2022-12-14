import { Injectable } from '@angular/core';
import { User } from '../interfaces/userInterface';
import { HttpClient } from '@angular/common/http';
import { find, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class userService {
  constructor(private http: HttpClient) {}

  private url: string = 'http://localhost:3000/users';

  getUser(name: string): Observable<User[]> {
    return this.http.get<User[]>(this.url + '?name=' + name);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
