import { EstiloService } from './estilos/estilo.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ClientesModule } from './clientes/clientes.module';
import { CevejasModule } from './cevejas/cevejas.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EstilosModule } from './estilos/estilos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EstilosModule,
    CoreModule,
    CevejasModule,
    ClientesModule,
    UsuariosModule,
    HttpModule,

    BrowserAnimationsModule
  ],
  providers: [EstiloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
