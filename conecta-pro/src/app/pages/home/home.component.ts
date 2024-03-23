import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

export interface monthlyChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  responsive: ApexResponsive;
}

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ApexStroke,
  ApexTooltip,
} from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialogs/dialog.component';

const MOBILE_VIEW = 'screen and (max-width: 768px)';
const TABLET_VIEW = 'screen and (min-width: 769px) and (max-width: 1024px)';
const MONITOR_VIEW = 'screen and (min-width: 1024px)';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // Dialog lembrete
  openDialog(

    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(DialogComponent,
     {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.listaItens.push(result);
    });
  }

  texto = window.document.getElementById('#texto');

  hiddens = true;

  listaItens: string[] = [

    'Levar livro para leitura',
    'Verificar qual sala estarei na próxima semana',
    'Atualizar relatório de alunos',
    'Verificar com a direção quais os dias de parque',
  ];

  addLembrete() {
    this.listaItens.push();
    this.hiddens = false;
    console.log(this.texto);
  }

  excluirLembrete() {
    this.listaItens.pop();
    console.log('removido');
  }

  @ViewChild('chart') chart: ChartComponent | any = null;
  public chartOptions: Partial<ChartOptions> | any;
  public monthlyChart!: Partial<monthlyChart> | any;

  @ViewChild('leftsidenav')
  public sidenav: MatSidenav | any;

  //get options from service
  private layoutChangesSubscription = Subscription.EMPTY;
  private isMobileScreen = false;
  private isContentWidthFixed = true;
  private isCollapsedWidthFixed = false;
  private htmlElement!: HTMLHtmlElement;

  get isOver(): boolean {
    return this.isMobileScreen;
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {
    this.chartOptions = {
      series: [25, 25, 25, 25],
      chart: {
        width: 380,
        type: 'donut',
      },
      labels: [
        'EPG Raquel de quiroz',
        'EPG Álvaro Mesquita',
        'EPG Ofélia',
        'EPG Céu São Domingos',
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 350,
          options: {
            chart: {
              width: 275,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    this.monthlyChart = {
      series: [
        {
          name: '',
          color: '#49BEFF',
          data: [25, 66, 20, 40, 12, 58, 20],
        },
      ],

      chart: {
        type: 'area',
        fontFamily: "'Plus Jakarta Sans', sans-serif;",
        foreColor: '#adb0bb',
        toolbar: {
          show: false,
        },
        height: 60,
        sparkline: {
          enabled: true,
        },
        group: 'sparklines',
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      fill: {
        colors: ['#E8F7FF'],
        type: 'solid',
        opacity: 0.05,
      },
      markers: {
        size: 0,
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
      },
    };

    this.htmlElement = document.querySelector('html')!;
    this.layoutChangesSubscription = this.breakpointObserver
      .observe([MOBILE_VIEW, TABLET_VIEW, MONITOR_VIEW])
      .subscribe((state) => {
        // SidenavOpened must be reset true when layout changes

        this.isMobileScreen = state.breakpoints[MOBILE_VIEW];

        this.isContentWidthFixed = state.breakpoints[MONITOR_VIEW];
      });
  }

  ngOnInit(): void {

  }
  edit=false;

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

  isEdit(){
    this.edit = !this.edit;

  }

  deleteItem(index:number){
    this.listaItens.splice(index,1)
  }


}
