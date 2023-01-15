import { Component, OnInit } from '@angular/core';
import { serverService } from 'src/app/services/server.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Server } from '../../interfaces/serverInterface';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
})
export class EditServerComponent implements OnInit {
  server!: Server;
  serverName = '';
  serverStatus = '';
  changeSaved = false;

  allowEdit = false;

  constructor(
    private serverService: serverService,
    private actualRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = +this.actualRoute.snapshot.params['id'];
    this.server = this.serverService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serverService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changeSaved = true;
    this.router.navigate(['../'], { relativeTo: this.actualRoute });
  }
}