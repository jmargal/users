import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponentComponent } from './users-component/users-component.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [UsersComponentComponent],
  imports: [
    CommonModule,HttpClientModule
  ]
})
export class UsersModule { }
