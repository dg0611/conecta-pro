import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste.component';
import {MatAccordion} from '@angular/material/expansion';
import {MatExpansionModule} from '@angular/material/expansion';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';


@NgModule({
  declarations: [

    TesteComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    TesteComponent

  ]
})

export class TesteModule {

}
