import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import jsPDF from 'jspdf';
import { CurrencyPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PeriodicElement } from 'src/app/shared/product/product.component';

interface Transaction {
  item: string;
  cost: number;
}
const MOBILE_VIEW = 'screen and (max-width: 768px)';
const TABLET_VIEW = 'screen and (min-width: 769px) and (max-width: 1024px)';
const MONITOR_VIEW = 'screen and (min-width: 1024px)';
@Component({
  selector: 'app-valor-receber',
  templateUrl: './valor-receber.component.html',
  styleUrls: ['./valor-receber.component.scss'],
})
export class ValorReceberComponent {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    { item: 'Março', cost: 840.0 },
    { item: 'Fevereiro', cost: 3200 },
    { item: 'Janeiro', cost: 3400 },
    { item: 'Dezembro', cost: 3600 },
    { item: 'Novembro', cost: 2900 },
    { item: 'Outubro', cost: 3000 },
  ];
  getTotalCost() {
    return this.transactions
      .map((t) => t.cost)
      .reduce((acc, value) => acc + value, 0);
  }

  selected: Date | null = null;
  @ViewChild('leftsidenav')
  public sidenav: MatSidenav | any;

  private layoutChangesSubscription = Subscription.EMPTY;
  private isMobileScreen = false;
  private isContentWidthFixed = true;
  private isCollapsedWidthFixed = false;
  private htmlElement!: HTMLHtmlElement;

  get isOver(): boolean {
    return this.isMobileScreen;
  }

  constructor(private breakpointObserver: BreakpointObserver) {
    this.htmlElement = document.querySelector('html')!;
    this.layoutChangesSubscription = this.breakpointObserver
      .observe([MOBILE_VIEW, TABLET_VIEW, MONITOR_VIEW])
      .subscribe((state) => {
        // SidenavOpened must be reset true when layout changes

        this.isMobileScreen = state.breakpoints[MOBILE_VIEW];

        this.isContentWidthFixed = state.breakpoints[MONITOR_VIEW];
      });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.layoutChangesSubscription.unsubscribe();
  }

  toggleCollapsed() {
    this.isContentWidthFixed = false;
  }

  onSidenavClosedStart() {
    this.isContentWidthFixed = false;
  }

  onSidenavOpenedChange(isOpened: boolean) {
    this.isCollapsedWidthFixed = !this.isOver;
  }

  //EXPORTAR PDF
  pdfExport() {
    this.exportPDF(this.transactions);
  }

  private exportPDF(transactions: Transaction[]) {
    const doc = new jsPDF();
    doc.text('ConectaPRÔ', 90, 10);
    let yPos = 40;

    doc.text('Relatório de Informações de valores a receber/recebidos', 40, 20);

    transactions.forEach((element) => {
      doc.text('Mês', 10, 30);
      doc.text(element.item, 10, yPos);
      doc.text('Total', 80, 30);
      doc.text(element.cost.toString(), 80, yPos);

      yPos += 8; // Ajusta a posição vertical para o próximo item
    });
    doc.save('relatorio_valor_receber.pdf');
  }//FIM EXPORTAR PDF

}
