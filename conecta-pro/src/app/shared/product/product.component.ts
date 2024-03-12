import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {

  escola:string;
  sala:number;
  data:string;
  horasTrabalhadas:number,
  valorRecebido: string

}

const ELEMENT_DATA: PeriodicElement[] = [
  { escola: 'EPG Raquel de quiroz', sala:1 , data: '12/fev/2024', horasTrabalhadas:5 , valorRecebido: 'R$ 210,00' },
  { escola: 'EPG Álvaro Mesquita', sala:4, data: '13/fev/2024', horasTrabalhadas:5, valorRecebido: 'R$ 210,00' },
  { escola: 'EPG Ofélia', sala: 7, data: '14/fev/2024', horasTrabalhadas:5, valorRecebido: 'R$ 210,00' },
  { escola: 'EPG Céu São Domingos', sala: 9, data: '15/fev/2024', horasTrabalhadas:5, valorRecebido: 'R$ 210,00' },
];


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['id', 'assigned', 'name', 'priority', 'budget'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
