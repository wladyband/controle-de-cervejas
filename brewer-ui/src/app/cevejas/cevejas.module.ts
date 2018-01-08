import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ButtonModule } from 'primeng/components/button/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CevejasCadastroComponent } from './cevejas-cadastro/cevejas-cadastro.component';

import { InputTextareaModule, SelectButtonModule, DropdownModule, RadioButtonModule, CodeHighlighterModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    InputTextareaModule,
    SelectButtonModule,
    DropdownModule,
    RadioButtonModule,
    CodeHighlighterModule,
    CurrencyMaskModule
  ],
  declarations: [CevejasCadastroComponent],
  exports: [
    CevejasCadastroComponent
  ]
})
export class CevejasModule { }
