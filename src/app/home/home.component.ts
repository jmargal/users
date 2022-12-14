import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {

  formFields;
  name:string='';
  password:string='';
  
  constructor(private router:Router,private authservice:authService,private formBuilder: FormBuilder,) {
    this.formFields = this.formBuilder.group({
      name: '',
      password: ''
    });
  }
   
  onLoadServers(id:number) {
   
    //Los parametros que se le pasan primero son los que van en la ruta
    //Los de la llave son los query params 
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
  }

  onLogin(){
    this.authservice.login(this.name, this.password);
  }

  onLogout(){
    this.authservice.logout();
  }



}
