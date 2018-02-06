import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CervejasCadastroComponent } from './cervejas-cadastro/cervejas-cadastro.component';
import { SharedModule } from './../shared/shared.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ButtonModule } from 'primeng/components/button/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

import { InputTextareaModule, SelectButtonModule, DropdownModule, RadioButtonModule, CodeHighlighterModule } from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';




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
    DialogModule,
    CurrencyMaskModule,

    SharedModule
  ],
  declarations: [CervejasCadastroComponent],
  exports: [CervejasCadastroComponent]
})
export class CervejasModule { }
