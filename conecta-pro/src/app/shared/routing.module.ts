import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';

//Components

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
//   {
//     path: 'details/:type/:id',
//     component: DetailsComponent,

//   },
//   {
//     path: 'list/:type',
//     component: ListComponent
//   },
//   {
//     path: 'admin', canActivate: [authGuardGuard], // Utilização da função guard
//     children: [
//       {
//         path: '',
//         component: DashboardComponent
//       },
//       {
//         path: 'post/:type',
//         component: CreatePostComponent
//       },
//       {
//         path: 'edit/:type/:id',
//         component: CreatePostComponent
//       },
//       {
//         path: 'table/:type',
//         component: TableComponent
//       }
//     ]

//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
