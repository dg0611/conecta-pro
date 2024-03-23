import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
export interface PeriodicElement {
  escola: string;
  sala: number;
  data: string;
  horasTrabalhadas: number;
  valorRecebido: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    escola: 'EPG Raquel de quiroz',
    sala: 1,
    data: '12/fev/2024',
    horasTrabalhadas: 5,
    valorRecebido: 'R$ 210,00',
  },
  {
    escola: 'EPG Álvaro Mesquita',
    sala: 4,
    data: '13/fev/2024',
    horasTrabalhadas: 5,
    valorRecebido: 'R$ 210,00',
  },
  {
    escola: 'EPG Ofélia',
    sala: 7,
    data: '14/fev/2024',
    horasTrabalhadas: 5,
    valorRecebido: 'R$ 210,00',
  },
  {
    escola: 'EPG Céu São Domingos',
    sala: 9,
    data: '15/fev/2024',
    horasTrabalhadas: 5,
    valorRecebido: 'R$ 210,00',
  },
];

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['id', 'assigned', 'name', 'priority', 'budget'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}

  // EXPORTAR PDF

  pdfExport() {
    this.exportPDF(ELEMENT_DATA);
  }

  private exportPDF(ELEMENT_DATA: PeriodicElement[]) {
    const doc = new jsPDF();
    doc.text('ConectaPRÔ', 90, 10);
    let yPos = 40;
    doc.text('Relatório de Informações Gerais', 60, 20);

    ELEMENT_DATA.forEach((element) => {
      doc.text('Escolas', 10, 30);
      doc.text(element.escola, 10, yPos);
      doc.text('Sala', 70, 30);
      doc.text(element.sala.toString(), 75, yPos);
      doc.text('Data', 85, 30);
      doc.text(element.data, 85, yPos);
      doc.text('Horas trabalhadas', 115, 30);
      doc.text(element.horasTrabalhadas.toString(), 135, yPos);
      doc.text('Valor Recebido', 165, 30);
      doc.text(element.valorRecebido.toString(), 170, yPos);

      yPos += 8; // Ajusta a posição vertical para o próximo item
    });
    doc.save('relatorio.pdf');
  }
}

// FIM PDF
