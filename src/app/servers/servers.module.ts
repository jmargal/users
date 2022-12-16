import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServidorComponent } from './servidor/servidor.component';
import { EditServerComponent } from './server-edit-component/edit-server.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServerPadreComponent } from './server-padre/server-padre.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditServerComponent,ServidorComponent,ServerPadreComponent],
  imports: [
    CommonModule,HttpClientModule,RouterModule,FormsModule
  ],
  exports:[EditServerComponent,ServidorComponent,ServerPadreComponent]
})
export class ServersModule { }
