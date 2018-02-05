import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CervejasCadastroComponent } from './cervejas-cadastro/cervejas-cadastro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CervejasCadastroComponent],
  exports: [CervejasCadastroComponent]
})
export class CervejasModule { }
