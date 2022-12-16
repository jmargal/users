import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponentComponent } from './users-component/users-component.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UsersComponentComponent],
  imports: [
    CommonModule,HttpClientModule,RouterModule
  ]
})
export class UsersModule { }
