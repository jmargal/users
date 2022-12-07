import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServersComponentComponent } from './servers-component/servers-component.component';



@NgModule({
  declarations: [ServersComponentComponent],
  imports: [
    CommonModule
  ],
  exports:[ServersComponentComponent]
})
export class ServersModule { }
