import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/interfaces/serverInterface';
import { serverService } from 'src/app/services/server.service';

@Component({
  selector: 'app-servers-component',
  templateUrl: './servers-component.component.html'
})
export class ServersComponentComponent implements OnInit{

  serverList:Server[]=[];

  constructor(private serverService:serverService)  { }

  ngOnInit(): void {
    this.serverList=this.serverService.lista
  }

}
