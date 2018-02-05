
import { CoreModule } from './core/core.module';

import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CidadesModule } from './cidades/cidades.module';
import { EstilosModule } from './estilos/estilos.module';
import { CervejasModule } from './cervejas/cervejas.module';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    BrowserAnimationsModule,
    CervejasModule,
    EstilosModule,
    CidadesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
