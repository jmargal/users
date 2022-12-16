import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user-component.component.html',
})
export class UserComponent implements OnInit {
  user!: { id: number; name: string };

  paramsSubscription!: Subscription;

  constructor(private actualRoute: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      //Lo que estamos haciendo es de la ruta que hemos inyectado en el constructor capturar los parametros con ese nombre
      id: this.actualRoute.snapshot.params['id'],
      name: this.actualRoute.snapshot.params['name'],
    };
    this.actualRoute.params.subscribe((updatedParams) => {
      this.user.id = updatedParams['id'];
      this.user.name = updatedParams['name'];
    });
  }

  // ngOnDestroy() {
  //   this.paramsSubscription.unsubscribe();
  // }
}
