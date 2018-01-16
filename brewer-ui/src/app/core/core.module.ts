import { ErroHandlerService } from './erro-handler.service';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastyModule } from 'ng2-toasty';
import { SlideMenuModule, TabViewModule, PanelMenuModule, SidebarModule } from 'primeng/primeng';
import { EstiloService } from '../estilos/estilo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PanelMenuModule,
    SidebarModule,
    ButtonModule,
    TabViewModule,
    ToastyModule.forRoot(),
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,
    ToastyModule
  ],
  providers: [
    EstiloService,
    ErroHandlerService
  ]
})
export class CoreModule { }
