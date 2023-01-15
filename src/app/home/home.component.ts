import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { authService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  name: string = '';
  password: string = '';
  isLoggedIn!: boolean;

  constructor(
    private router: Router,
    private authservice: authService,
    private cookieSvc: CookieService,
  ) {}
  ngOnInit(): void {
    if(this.cookieSvc.get('login')==='true'){
      this.isLoggedIn=true;
    }
    else{
      this.isLoggedIn=false;
    }

  }

  onLoadServers(id: number) {
    //Los parametros que se le pasan primero son los que van en la ruta
    //Los de la llave son los query params
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: { allowEdit: '1' },
      fragment: 'loading',
    });
  }

  onLogin() {
    this.authservice.login(this.name, this.password);
  }

  onLogout() {
    this.authservice.logout();
    this.isLoggedIn=false;
  }
}
