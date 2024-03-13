import { Component } from '@angular/core';
import { ViewChild} from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
  // standalone: true,
  // imports: [
  //   MatButtonModule,
  //   MatExpansionModule,
  //   MatIconModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatDatepickerModule,
  //   MatNativeDateModule
  // ],
})
export class TesteComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion | any;
}
