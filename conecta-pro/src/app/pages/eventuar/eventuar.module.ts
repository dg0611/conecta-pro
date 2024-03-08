import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventuarComponent } from './eventuar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';



@NgModule({
  declarations: [
    EventuarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule
  ]
})
export class EventuarModule { }
