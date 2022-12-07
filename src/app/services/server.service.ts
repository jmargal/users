import { Injectable } from '@angular/core';
import { Server } from '../interfaces/serverInterface';

@Injectable({
  providedIn: 'root',
})
export class serverService {
  
  constructor() {}

  private servers:Server[] = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online',
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline',
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline',
    },
  ];

  get lista():Server[]{
    return [...this.servers];
  }
}
