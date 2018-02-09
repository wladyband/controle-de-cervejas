import { ClientesService } from './../clientes/clientes.service';
import { ButtonModule } from 'primeng/components/button/button';
import { PanelMenuModule, SidebarModule, TabViewModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CidadesService } from './../cidades/cidades.service';
import { EstilosService } from './../estilos/estilos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CervejasService } from '../cervejas/cervejas.service';
import { ErrorHandlerService } from './error-handler.service';
import { ToastyModule } from 'ng2-toasty';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PanelMenuModule,
    SidebarModule,
    ButtonModule,
    TabViewModule,
    ToastyModule.forRoot()
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,
    ToastyModule
    ],
  providers: [
    EstilosService,
    CidadesService,
    CervejasService,
    ClientesService,
    ErrorHandlerService

  ]
})
export class CoreModule { }
