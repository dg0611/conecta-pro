import { AuthModule } from './pages/auth/auth.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/shared.module').then(p => p.SharedModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(p => p.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
