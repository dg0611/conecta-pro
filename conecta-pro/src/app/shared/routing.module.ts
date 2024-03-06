import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from '../pages/auth/login/login.component';
import { RegistroComponent } from '../pages/auth/registro/registro.component';
import { EventuarComponent } from '../pages/eventuar/eventuar.component';
import { AgendaComponent } from '../pages/agenda/agenda.component';
import { AvaliacoesComponent } from '../pages/avaliacoes/avaliacoes.component';
import { RelatorioComponent } from '../pages/relatorio/relatorio.component';
import { ValorReceberComponent } from '../pages/valor-receber/valor-receber.component';
import { HomeComponent } from '../pages/home/home.component';

//Components

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'eventuar',
    component:EventuarComponent
  },
  {
    path:'agenda',
    component:AgendaComponent
  },
  {
    path:'avaliacao',
    component:AvaliacoesComponent
  },
  {
    path: 'valor-receber',
    component:ValorReceberComponent
  },
  {
    path:'relatorio',
    component:RelatorioComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
