
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadesPesquisaComponent } from './cidades-pesquisa/cidades-pesquisa.component';


import { FormsModule } from '@angular/forms';
import { PanelMenuModule, CodeHighlighterModule, DropdownModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    PanelMenuModule,
    CodeHighlighterModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,


    SharedModule
  ],
  declarations: [CidadesPesquisaComponent],
  exports: [CidadesPesquisaComponent]
})
export class CidadesModule { }
