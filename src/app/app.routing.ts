import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditServerComponent } from './servers/server-edit-component/edit-server.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UserComponent } from './users/user-component/user-component.component';
import { UsersComponentComponent } from './users/users-component/users-component.component';
import { ServerPadreComponent } from './servers/server-padre/server-padre.component';
import { ServidorComponent } from './servers/servidor/servidor.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { RolGuardGuard } from './rol.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'users',
    canActivate:[AuthGuardGuard],
    canActivateChild:[AuthGuardGuard],
    component: UsersComponentComponent,
  },
  { path: 'users/:id/:name', component: UserComponent },
  {
    path: 'servers',
    canActivate:[AuthGuardGuard],
    canActivateChild:[AuthGuardGuard],
    component: ServerPadreComponent,
    children: [
      { path: ':id/edit', canActivate:[RolGuardGuard], component: EditServerComponent },
      { path: ':id', component: ServidorComponent },
    ],
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
