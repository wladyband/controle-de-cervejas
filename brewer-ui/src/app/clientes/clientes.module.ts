import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { InputMaskModule, RadioButtonModule, DropdownModule, SelectButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    SelectButtonModule,
    DropdownModule,
    RadioButtonModule,
    InputMaskModule,
    SharedModule
  ],
  declarations: [ClientesCadastroComponent],
  exports: [ClientesCadastroComponent]
})
export class ClientesModule { }
