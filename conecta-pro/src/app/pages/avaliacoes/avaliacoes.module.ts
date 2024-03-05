import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliacoesComponent } from './avaliacoes.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AvaliacoesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AvaliacoesModule { }
