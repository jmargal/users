import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/interfaces/serverInterface';
import { serverService } from 'src/app/services/server.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-padre-component',
  templateUrl: './server-padre.component.html',
  styles: ['.col{display:flex;gap:10%;}'],

})
export class  ServerPadreComponent implements OnInit {
  serverList: Server[] = [];

  constructor(
    private serverService: serverService,
    private router: Router,
    private actualRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.serverList = this.serverService.lista
  }

  onReload() {
    //this.router.navigate(['/servers']);
    //Esto seria una ruta relativa , y le decimos que es relativa a actualRoute que es la ruta en la que nos encontramos y hemos inyectado en el constructor
    this.router.navigate(['/servers'], { relativeTo: this.actualRoute })
  }
}
