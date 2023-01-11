import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ServersModule } from './servers/servers.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { serverService } from './services/server.service';
import { AppRoutingModule } from './app.routing';
import { authService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AuthGuardGuard } from './auth-guard.guard';


@NgModule({
  declarations: [
    AppComponent,HomeComponent

  ],
  imports: [
    CommonModule,BrowserModule,RouterModule,ServersModule,SharedModule,UsersModule,AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [serverService,authService,AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
