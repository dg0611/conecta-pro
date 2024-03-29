import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { RoutingModule } from './routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { AppNavItemComponent } from './sidebar/nav-item/nav-item.component';
import { HeaderComponent } from './header/header.component';
import { TablerIconComponent, TablerIconsModule } from 'angular-tabler-icons';
import { FormsComponent } from './forms/forms.component';
import { ProductComponent } from './product/product.component';
import { DialogComponent } from './dialogs/dialog.component';
import { DialogDetalhamentoEventuarComponent } from './dialogs/dialog-detalhamento-eventuar.component';




@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent,
    AppNavItemComponent,
    HeaderComponent,
    FormsComponent,
    ProductComponent,
    DialogComponent,
    DialogDetalhamentoEventuarComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    AngularMaterialModule,
    TablerIconsModule
    // RoutingModule,
  ],
  exports: [
    SidebarComponent,
    FormsComponent,
    HeaderComponent,
    MenuComponent,
    TablerIconComponent,
    ProductComponent,
    DialogComponent,
    DialogDetalhamentoEventuarComponent
  ]
})
export class SharedModule { }
