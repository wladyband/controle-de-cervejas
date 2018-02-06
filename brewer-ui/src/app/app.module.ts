import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    CervejasModule,
    EstilosModule,
    CidadesModule,
    CervejasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
