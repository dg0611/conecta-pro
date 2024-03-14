import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValorReceberComponent } from './valor-receber.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { TesteModule } from 'src/app/teste/teste.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    ValorReceberComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TesteModule,
    AngularMaterialModule,
    MatListModule

  ]
})
export class ValorReceberModule { }
