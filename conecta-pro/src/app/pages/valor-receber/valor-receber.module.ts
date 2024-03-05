import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValorReceberComponent } from './valor-receber.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ValorReceberComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class ValorReceberModule { }
