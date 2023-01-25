import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../auth.service';
import Swal from 'sweetalert2'

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
  ) {}
  ngOnInit(): void {
    this.authservice.isAuthenticated().subscribe({
      next: (resp) =>{
        //Si es true
        if(resp){
          this.isLoggedIn=true;
        }
        else{
          this.isLoggedIn=false
        }
      }})
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
    this.authservice.login(this.name, this.password)
    .subscribe( resp => {
      if (resp){
        this.isLoggedIn=true;
      }else{

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'User or password incorrect',

      })
    }
    })
  }

  onLogout() {
    this.authservice.logout();
    this.isLoggedIn=false;
  }
}
