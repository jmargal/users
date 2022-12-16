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

  getServer(id: number) {
     const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }

  get lista():Server[]{
    return [...this.servers];
  }
}
