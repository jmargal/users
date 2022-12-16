import { Component, OnInit } from '@angular/core';

import { serverService } from '../../services/server.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Server } from '../../interfaces/serverInterface';

@Component({
  selector: 'app-servidor',
  templateUrl: './servidor.component.html',
})
export class ServidorComponent implements OnInit {
  server!: Server;

  constructor(
    private serverService: serverService,
    private actualRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.actualRoute.snapshot.params['id'];
    this.server != this.serverService.getServer(id);

    this.actualRoute.params.subscribe({
      next: (resp) => {
        this.server = this.serverService.lista[resp['id']];
      },
    });
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.actualRoute });
  }
}
