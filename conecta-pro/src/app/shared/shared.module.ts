import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { RoutingModule } from './routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { AppNavItemComponent } from './sidebar/nav-item/nav-item.component';


@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent,
    AppNavItemComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    AngularMaterialModule,
    // RoutingModule,
  ],
  exports: [
  ]
})
export class SharedModule { }
