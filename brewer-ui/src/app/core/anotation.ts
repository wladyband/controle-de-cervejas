/*


Código para implementação de combo dinâmico##############################################################################################


import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class CidadesService {

  constructor() { }

  buscarEstados(): Observable<any> {
    return Observable.of([
      {
        uf: 'PR',
        nome: 'Paraná'
      },
      {
        uf: 'SP',
        nome: 'São Paulo'
      }
    ]);
  }

  buscarCidadePorUF(uf: string): Observable<any> {
    if (uf === 'PR') {
      return Observable.of([
        {
          ibge: '975',
          nome: 'Curitiba'
        },
        {
          ibge: '900',
          nome: 'Maringá'
        }
      ]);
    }

    return Observable.of([
      {
        ibge: '991',
        nome: 'São Paulo'
      },
      {
        ibge: '999',
        nome: 'Diadema'
      }
    ]);
  }

}
===============================================================================================================


import { CidadesService } from './../cidades.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidades-pesquisa',
  templateUrl: './cidades-pesquisa.component.html',
  styleUrls: ['./cidades-pesquisa.component.css']
})
export class CidadesPesquisaComponent implements OnInit {


  uf: string;
  ibge: string;

  estados: any[] = [];
  cidades: any[] = [];

   constructor(
     private cidadesService: CidadesService
     ) { }

  ngOnInit() {
    this.cidadesService.buscarEstados().subscribe(result => this.estados = result);
  }

  buscarCidades() {
    this.cidadesService.buscarCidadePorUF(
      this.uf)
      .subscribe(result => this.cidades = result);
  }


}
==============================================================================================================


<div class="container">
  <select name="estado" id="estado" [(ngModel)]="uf" (change)="buscarCidades()">
    <option *ngFor="let estado of estados" [value]="estado.uf">{{estado.nome}}</option>
  </select>

  <select name="cidade" id="cidade" [(ngModel)]="ibge">
    <option *ngFor="let cidade of cidades" [value]="cidade.ibge">{{cidade.nome}}</option>
  </select>

  <br>
  <br>
  <br> UF Selecionada: {{uf}}

  <br>
  <br> IBGE Selecionado: {{ibge}}
</div>










Verificação de saída de arrays ##########################################################################################################

listarTodas(): Promise<any> {
  return this.http.get(this.estilosUrl)
    .toPromise()
    .then(response => {
      console.log(response.json().content);
    });
}



export class EstilosPesquisaComponent implements OnInit {

  constructor(
    private estilosService:   EstilosService
  ) { }

  ngOnInit() {
    this.pesquisarEstilos();
  }

  pesquisarEstilos() {
    this.estilosService.listarTodas()
    .then(() => null);
  }

}




*/
