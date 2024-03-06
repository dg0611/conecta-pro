import { AuthModule } from './pages/auth/auth.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/auth/auth.module').then(p => p.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(p => p.HomeModule)
  },
  {
    path: 'eventuar',
    loadChildren: () => import('./pages/eventuar/eventuar.module').then(p => p.EventuarModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./pages/agenda/agenda.module').then(p => p.AgendaModule)
  },
  {
    path: 'avaliacao',
    loadChildren: () => import('./pages/avaliacoes/avaliacoes.module').then(p => p.AvaliacoesModule)
  },
  {
    path:'relatorio',
    loadChildren: () => import('./pages/relatorio/relatorio.module').then(p => p.RelatorioModule)
  },
  {
    path:'valor-receber',
    loadChildren: () => import('./pages/valor-receber/valor-receber.module').then(p => p.ValorReceberModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
