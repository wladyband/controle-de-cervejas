import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { PanelMenuModule, CodeHighlighterModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';



import { EstilosPesquisaComponent } from './estilos-pesquisa/estilos-pesquisa.component';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    PanelMenuModule,
    CodeHighlighterModule,
    FormsModule,

    SharedModule
  ],
  declarations: [EstilosPesquisaComponent],
  exports: [EstilosPesquisaComponent]
})
export class EstilosModule { }
