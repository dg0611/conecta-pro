import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
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
    SharedModule,
    AngularMaterialModule
  ]
})
export class AvaliacoesModule { }
