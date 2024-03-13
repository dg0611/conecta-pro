import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { FullCalendarModule } from '@fullcalendar/angular';




@NgModule({
  declarations: [
    AgendaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule,
    FullCalendarModule

  ]
})
export class AgendaModule { }
