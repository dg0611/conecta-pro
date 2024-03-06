import { NgModule, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { NgApexchartsModule } from "ng-apexcharts";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AngularMaterialModule,
    NgApexchartsModule
  ]
})
export class HomeModule { }

