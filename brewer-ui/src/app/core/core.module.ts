import { CidadesService } from './../cidades/cidades.service';
import { EstilosService } from './../estilos/estilos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    EstilosService,
    CidadesService
  ]
})
export class CoreModule { }
