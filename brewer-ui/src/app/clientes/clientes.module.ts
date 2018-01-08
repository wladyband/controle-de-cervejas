import { SelectButtonModule, DropdownModule, RadioButtonModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/components/button/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    SelectButtonModule,
    DropdownModule,
    RadioButtonModule
  ],
  declarations: [ClientesCadastroComponent],
  exports: [ClientesCadastroComponent]
})
export class ClientesModule { }
