import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
   
  onLoadServers(id:number) {
   
    //Los parametros que se le pasan primero son los que van en la ruta
    //Los de la llave son los query params 
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
  }

}
