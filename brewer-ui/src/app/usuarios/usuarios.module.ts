import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosCadastroComponent } from './usuarios-cadastro/usuarios-cadastro.component';
import { CheckboxModule, TabViewModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    TabViewModule
  ],
  declarations: [UsuariosCadastroComponent],
  exports: [UsuariosCadastroComponent]
})
export class UsuariosModule { }
