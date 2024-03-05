import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AgendaComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AgendaModule { }
