import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { authResponse } from './interfaces/authResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class authService {
  private url: string = 'http://localhost:8000';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private cookieSvc: CookieService, private http: HttpClient) {}

  //Metodo para hacer login que va a devolver un observable
  login(email: string, password: string): Observable<boolean> {
    //Hace la peticion con los datos que hemos recibido
    return this.http.post<authResponse>(
        this.url + '/auth/login',
        { email, password },
        this.httpOptions
      )
      //Esto lo vamos a hacer sobre la respuesta que devuelve la peticion
      .pipe(
        //El switchMap recoge un observable, lo trata y devuelve otro
        switchMap((token) => {
         
          //Guarda en las cookies el token que recoge de la peticion de antes
          this.cookieSvc.set('token', token.access_token);
          //Devuelve observable de true
          return of(true);
        }),
        catchError((error) => {
          //Si hay algun error borra de las cookies
          this.cookieSvc.delete('token');
          return of(false);
        })
      );
  }

  //Metodo que comprueba si un user esta registrado, devuelve un observable boolean
  isAuthenticated(): Observable<boolean> {
    //Hace una peticion(solo obtendremos respuesta si tiene un token)
   return this.http.get(this.url + '/jwt')
    .pipe(switchMap((resp) => {
        return of(true);
      }),
      catchError((err) => {
        this.cookieSvc.delete('token')
        return of(false);
      })
    );
  }

  logout(): void {
    this.cookieSvc.delete('token');
  }
}

// this.userService.getUser(name).subscribe({
//   next: (user) => {
//     if (user[0].password === pass) {
//       this.loggedIn = true;
//       this.cookieSvc.set('login', 'true');
//       this.cookieSvc.set('rol', user[0].rol);
//       this.router.navigate(['/servers']);
//     }
//   },
//   error: (err) => {
//     console.log(err);
//   },
// });
//Recuperamos el usuario y comprobamos que la contraseña sea correcta
//  return this.userService.getUserByEmail(email)
//   .pipe( switchMap((user=> {
//     if (user.length && user[0].password===password){
//       localStorage.setItem('authenticated', 'true');
//       localStorage.setItem('rol',user[0].rol)
//       return of(true)
//     }
//     else{
//       localStorage.setItem('authenticated', 'false');
//       return of(false)
//     }
//   })))
