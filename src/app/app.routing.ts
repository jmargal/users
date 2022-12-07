import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ServersComponentComponent } from "./servers/servers-component/servers-component.component";
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UsersComponentComponent } from './users/users-component/users-component.component';

const routes:Routes=[
    {
        path: '',
        component: HomeComponent,
        pathMatch:'full'
        
    },
    {
        path:'servers',
        component:ServersComponentComponent
    },
    {
        path:'users',
        component:UsersComponentComponent
    },
    {
        path:'**',
        component:NotFoundComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}