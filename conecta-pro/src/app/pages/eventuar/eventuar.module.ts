import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventuarComponent } from './eventuar.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    EventuarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EventuarModule { }
