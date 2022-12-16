import { Component, OnInit } from '@angular/core';
import { serverService } from 'src/app/services/server.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
})
export class EditServerComponent implements OnInit {
  server!: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';

  allowEdit = false;

  constructor(
    private serverService: serverService,
    private actualRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.actualRoute.queryParams.subscribe((queryParams: Params) => {
      if(queryParams['allowEdit'] === 1){
        this.allowEdit=true;
      }
      console.log(this.allowEdit);
    });
  }

  onUpdateServer() {
    this.serverService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
