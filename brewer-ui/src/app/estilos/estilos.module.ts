import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PanelMenuModule, CodeHighlighterModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstiloPesquisaComponent } from './estilo-pesquisa/estilo-pesquisa.component';
import { EstiloCadastroComponent } from './estilo-cadastro/estilo-cadastro.component';

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
  declarations: [EstiloPesquisaComponent, EstiloCadastroComponent],
  exports: [
    EstiloPesquisaComponent,
    EstiloCadastroComponent
  ]
})
export class EstilosModule { }
